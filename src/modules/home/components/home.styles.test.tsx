/**
 * @format
 */

import 'react-native';
import React from 'react';
import {ItemFooter, WeatherContent} from './home.styles';
import images from 'core/assets';
import {render} from 'core/utils/functions/testUtils';
import {fireEvent} from '@testing-library/react-native';
import {weatherTime, weatherMain} from '../../../../__mock__/weather';

const handleOnPress = jest.fn();

const FooterComponent = (
  <ItemFooter
    index={1}
    onPress={handleOnPress}
    icon={{source: images.icons.weathers.moonCloudMidRain}}
    time="2022-07-21 03:00:00"
    weather={30}
  />
);
const WeatherContentComponent = (
  <WeatherContent city={weatherMain.city} item={weatherTime} />
);

describe('home.styles', () => {
  describe('Content', () => {
    it('should render city weather correctly', () => {
      const {getByText} = render(WeatherContentComponent);
      expect(getByText('Juazeiro do norte')).toBeTruthy();
    });

    it('should render title weather correctly', async () => {
      const {getByTestId} = render(WeatherContentComponent);
      const element = getByTestId('title-main-weather');
      expect(element.children[0]).toEqual('22');
      expect(element.children[1]).toEqual('º');
    });

    it('should render description weather correctly', async () => {
      const {getByTestId} = render(WeatherContentComponent);
      const element = getByTestId('description-main-weather');
      expect(element.children[0]).toEqual(weatherTime.description);
    });

    it('should render max temp weather correctly', async () => {
      const {getByTestId} = render(WeatherContentComponent);
      const element = getByTestId('min-main-weather');
      expect(element.children[0]).toEqual('Min ');
      expect(element.children[1]).toEqual('20');
      expect(element.children[2]).toEqual('º');
    });

    it('should render min temp weather correctly', async () => {
      const {getByTestId} = render(WeatherContentComponent);
      const element = getByTestId('max-main-weather');
      expect(element.children[0]).toEqual('Max ');
      expect(element.children[1]).toEqual('22');
      expect(element.children[2]).toEqual('º');
    });
  });

  describe('Footer', () => {
    it('should render main weather correctly', () => {
      const {getByText} = render(FooterComponent);
      expect(getByText('30º')).toBeTruthy();
    });

    it('should render formmat hour correctly', () => {
      const {getByText} = render(FooterComponent);
      expect(getByText('03H')).toBeTruthy();
    });

    it('should onPress correctly', () => {
      const {getByTestId} = render(FooterComponent);
      fireEvent.press(getByTestId('btn-item-weather-small'));
      expect(handleOnPress).toBeCalled();
    });
  });
});
