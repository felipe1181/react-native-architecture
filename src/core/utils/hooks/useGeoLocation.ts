import {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';

const useGeoLocation = () => {
  const [currentLocation, setCurrentLocation] = useState({lat: 0, lon: 0});

  function reloadLocation() {
    setCurrentLocation({
      lat: 0,
      lon: 0,
    });
  }
  useEffect(() => {
    if (currentLocation.lat === 0 && currentLocation.lon === 0) {
      Geolocation.getCurrentPosition(info =>
        setCurrentLocation({
          lat: Number(info.coords.latitude),
          lon: Number(info.coords.longitude),
        }),
      );
    }
  }, [currentLocation]);
  console.log('currentLocation', currentLocation);
  return {
    ...currentLocation,
    reloadLocation,
  };
};

export default useGeoLocation;
