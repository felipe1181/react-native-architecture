import React from 'react';
import reducerConstructor from '../reducer';
import {WeatherContext} from '../reducer/types';

const {initialState, actions} = reducerConstructor;

export default React.createContext<WeatherContext>({
  ...initialState,
  ...actions,
});
