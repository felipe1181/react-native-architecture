import {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';

const useGeoLocation = () => {
  const [currentLocation, setCurrentLocation] = useState({lat: 0, lon: 0});

  useEffect(() => {
    Geolocation.getCurrentPosition(info =>
      setCurrentLocation({
        lat: Number(info.coords.latitude),
        lon: Number(info.coords.longitude),
      }),
    );
  }, []);

  return {
    ...currentLocation,
  };
};

export default useGeoLocation;
