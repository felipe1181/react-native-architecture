import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PropsRoute} from './interfaces';
import HomeModule from 'modules/home';

const Stack = createNativeStackNavigator();

const ApplicationModuleRoutes: Array<PropsRoute> = [...HomeModule.Routes];

const Routes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      {ApplicationModuleRoutes.map(({name, Component}, index) => {
        return (
          <Stack.Screen
            key={`router-${index}`}
            name={name}
            component={Component}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default Routes;
