import { useState } from 'react';
import * as Location from 'expo-location';

const useExpoLocation = () => {
  const [expoLocationError, setExpoLocationError] = useState<string | null>(
    null
  );

  const [expoPostalCode, setExpoPostalCode] = useState<string | null>('');

  const getExpoLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setExpoLocationError('Permission to access location was denied');
        return;
      }

      const locationData = await Location.getCurrentPositionAsync({});

      const reverseGeocode = await Location.reverseGeocodeAsync({
        latitude: locationData.coords.latitude,
        longitude: locationData.coords.longitude,
      });

      const address = reverseGeocode[0];
      setExpoPostalCode(address?.postalCode);
    } catch (error) {
      console.error('Error fetching location', error);
      setExpoLocationError('Error fetching location');
    }
  };

  return {
    expoLocationError,
    expoPostalCode,
    getExpoLocation,
  };
};

export default useExpoLocation;
