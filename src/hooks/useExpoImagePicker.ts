import { useState } from 'react';
import { Alert, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { getFormat } from 'src/utils/getFormat';

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
      Alert.alert('권한이 없습니다.', '사진 접근 권한이 필요합니다.');

      return false;
    }

    return true;
  };

  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const pickImage = async (extensions?: string[]) => {
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
      quality: 1,
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
        error: 'cancelled',
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
    setSelectedImages(imageUris);
  };
  return {
    selectedImages,
    pickImage,
  };
};

export default useExpoImagePicker;
