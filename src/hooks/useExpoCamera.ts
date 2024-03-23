import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

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
      quality: 0.5,
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
