import {buildReducer} from 'core/utils/functions';
import {
  ActionsProvider,
  BindActionsProvider,
  CurrentAction,
  StateProvider,
  TypeActionsStateProvider,
  WeatherMainApi,
} from './types';

import actions from './actions';

const INITIAL_STATE: StateProvider = {
  data: {
    city: {
      id: 0,
      name: '',
    },
    data: [],
  },
  weatherChosedIndex: 0,
};

const bindActions: BindActionsProvider = {
  setWeathers: (payload: WeatherMainApi) => ({
    type: TypeActionsStateProvider.SET_WEATHERS,
    payload,
  }),
  setCurrentWeather: (payload: number) => ({
    type: TypeActionsStateProvider.SET_CURRENT_WEATHER,
    payload,
  }),
};

const reducerConstructor = {
  reducer: (state: StateProvider, currentAction: CurrentAction) =>
    buildReducer<StateProvider, ActionsProvider<StateProvider>, CurrentAction>({
      state,
      currentAction,
      actions,
    }),
  actions: bindActions,
  initialState: INITIAL_STATE,
};

export default reducerConstructor;
