import * as ImagePicker from 'expo-image-picker';
import { getFormat } from 'src/utils/getFormat';
import { Platform } from 'react-native';

const useExpoImagePicker = () => {
  const [libraryPermissionInfo, requestPermission] =
    ImagePicker.useMediaLibraryPermissions();

  const verifyPermissions = async () => {
    if (
      libraryPermissionInfo?.status ===
      ImagePicker.PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (libraryPermissionInfo?.status === ImagePicker.PermissionStatus.DENIED) {
      return false;
    }

    return true;
  };

  const pickImage = async (selectedImages?: number, extensions?: string[]) => {
    const ios = Platform.OS === 'ios';
    const permissionCameraRollResult = await verifyPermissions();

    if (!permissionCameraRollResult) {
      return {
        error: 'denied',
      };
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 0.5,
      selectionLimit: selectedImages ? 5 - selectedImages : 5,
      base64: true,
    });

    if (!ios && !result) {
      const pendingResults = await ImagePicker.getPendingResultAsync();
      const [firstResult] = pendingResults;
      result =
        'canceled' in firstResult
          ? firstResult
          : { canceled: true, assets: null };
    }

    if (result.canceled || !result.assets.length) {
      return {
        error: 'canceled',
      };
    }
    const formats = result.assets.map((asset) => getFormat(asset.uri));

    const notSupportedFormats =
      extensions && formats.some((format) => !extensions.includes(format));
    if (notSupportedFormats) {
      return {
        error: 'format',
      };
    }

    const imageUris = result.assets.map((asset) => asset.uri);

    return imageUris;
  };

  return {
    pickImage,
  };
};

export default useExpoImagePicker;
