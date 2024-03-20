import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';

const useExpoCamera = () => {
  const [photoUri, setPhotoUri] = useState<string | null>(null);

  const [cameraPermissionInfo, requestPermission] =
    ImagePicker.useCameraPermissions();

  const verifyPermissions = async () => {
    if (
      cameraPermissionInfo?.status === ImagePicker.PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (cameraPermissionInfo?.status === ImagePicker.PermissionStatus.DENIED) {
      Alert.alert('권한이 없습니다.', '카메라 접근 권한이 필요합니다.');

      return false;
    }

    return true;
  };

  const openCamera = async () => {
    const permissionResult = await verifyPermissions();

    if (!permissionResult) {
      return {
        error: 'denied',
      };
    }

    const cameraImage = await ImagePicker.launchCameraAsync({
      quality: 0.7,
      allowsEditing: false,
      aspect: [16, 9],
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (cameraImage.canceled || !cameraImage.assets.length) {
      return {
        error: 'cancelled',
      };
    }

    if (!cameraImage.canceled) {
      setPhotoUri(cameraImage.assets[0].uri);
    }
  };

  return { openCamera, photoUri };
};

export default useExpoCamera;
