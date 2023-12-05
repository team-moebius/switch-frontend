import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

const useExpoCamera = () => {
  const [photoUri, setPhotoUri] = useState<string | null>(null);

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.status !== 'granted') {
      return {
        error: 'denied',
      };
    }

    const cameraImage = await ImagePicker.launchCameraAsync({
      quality: 0.7,
      allowsEditing: false,
      aspect: [16, 9],
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
