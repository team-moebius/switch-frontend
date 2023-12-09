import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

const useExpoLocation = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [address, setAddress] =
    useState<Location.LocationGeocodedAddress | null>(null);

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const locationData = await Location.getCurrentPositionAsync({});
      setLocation(locationData);

      // Get address from coordinates
      const reverseGeocode = await Location.reverseGeocodeAsync({
        latitude: locationData.coords.latitude,
        longitude: locationData.coords.longitude,
      });

      // Assuming the first result is the most relevant address
      const firstAddress = reverseGeocode[0];
      setAddress(firstAddress);
    } catch (error) {
      setErrorMsg('Error fetching location');
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return { location, errorMsg, address, getLocation };
};

export default useExpoLocation;
