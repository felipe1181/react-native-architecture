const images = {
  home: {
    background: require('./images/home/bg.jpg'),
    house: require('./images/home/house.png'),
  },
  modal: {
    background: require('./images/modal/bg-modal.png'),
  },
  weathers: {
    moonCloudFastWind: require('./images/weathers/moon-cloud-fast-wind.png'),
    moonCloudMidRain: require('./images/weathers/moon-cloud-mid-rain.png'),
    sunCloudAngledRain: require('./images/weathers/sun-cloud-angled-rain.png'),
    sunCloudMidRain: require('./images/weathers/sun-cloud-mid-rain.png'),
    tornado: require('./images/weathers/tornado.png'),
  },
  icons: {
    openWeathers: {
      '01d': require('./icons/weathers/sun/01d.png'),
      '02d': require('./icons/weathers/sun/02d.png'),
      '03d': require('./icons/weathers/sun/03d.png'),
      '04d': require('./icons/weathers/sun/04d.png'),
      '10d': require('./icons/weathers/sun/10d.png'),
      '11d': require('./icons/weathers/sun/11d.png'),
      '01n': require('./icons/weathers/moon/01n.png'),
      '02n': require('./icons/weathers/moon/02n.png'),
      '03n': require('./icons/weathers/moon/03n.png'),
      '04n': require('./icons/weathers/moon/04n.png'),
      '10n': require('./icons/weathers/moon/10n.png'),
      '11n': require('./icons/weathers/moon/11n.png'),
    },
    system: {
      reload: require('./icons/system/reload.png'),
    },
  },
  animations: {
    cloudClean: require('./animations/cloud/cloud-clean.json'),
    cloudRain: require('./animations/cloud/cloud-rain.json'),
    cloudSnow: require('./animations/cloud/cloud-snow.json'),
    cloudThunder: require('./animations/cloud/cloud-thunder.json'),
    cloudMist: require('./animations/cloud/cloud-mist.json'),
    cloudShowerRain: require('./animations/cloud/cloud-shower-rain.json'),
    moonCloudClean: require('./animations/moon/moon-cloud-clean.json'),
    moonCloudRain: require('./animations/moon/moon-cloud-rain.json'),
    moonLight: require('./animations/moon/moon-light.json'),
    sunCloudClean: require('./animations/sun/sun-cloud-clean.json'),
    sunCloudRain: require('./animations/sun/sun-cloud-rain.json'),
    sunLight: require('./animations/sun/sun-light.json'),
    notFound: require('./animations/system/not-found.json'),
  },
};
export default images;
