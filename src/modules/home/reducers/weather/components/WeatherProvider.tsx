import {bindActionCreators} from 'core/utils/functions';
import React, {useMemo, useReducer} from 'react';

import {weatherContext} from '../contexts';
import reducerConstructor from '../reducer';
import {CurrentAction} from '../reducer/types';

const {initialState, reducer, actions} = reducerConstructor;

function WeatherProvider({...props}) {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
  });

  const binderActionCreators = useMemo(
    () => bindActionCreators<CurrentAction, typeof actions>(dispatch, actions),
    [],
  );

  const value = useMemo(
    () => ({
      ...state,
      ...binderActionCreators,
    }),
    [state, binderActionCreators],
  );

  return <weatherContext.Provider {...props} value={value} />;
}
export default WeatherProvider;
