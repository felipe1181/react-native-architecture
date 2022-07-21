import images from 'core/assets';

const openWeatherIconId = {
  '01d': images.animations.sunLight,
  '02d': images.animations.sunCloudClean,
  '03d': images.animations.cloudClean,
  '04d': images.animations.cloudClean,
  '09d': images.animations.cloudShowerRain,
  '10d': images.animations.sunCloudRain,
  '11d': images.animations.cloudThunder,
  '13d': images.animations.cloudSnow,
  '50d': images.animations.cloudMist,
  '01n': images.animations.moonLight,
  '02n': images.animations.moonCloudClean,
  '03n': images.animations.cloudClean,
  '04n': images.animations.cloudClean,
  '09n': images.animations.cloudShowerRain,
  '10n': images.animations.moonCloudRain,
  '11n': images.animations.cloudThunder,
  '13n': images.animations.cloudSnow,
  '50n': images.animations.cloudMist,
};

export default function getAnimationByOpenWeatherIconId(id: string) {
  console.log('id', id);
  const currentWeather =
    openWeatherIconId[id as keyof typeof openWeatherIconId];

  if (currentWeather) {
    return currentWeather;
  }
  return images.animations.notFound;
}
