import {
  StateProvider,
  ActionsProvider,
  TypeActionsStateProvider,
} from './types';
import {normalizeApiWeatherToWeatherEntity} from 'modules/home/utils';

const actions: ActionsProvider<StateProvider> = {
  [TypeActionsStateProvider.SET_WEATHERS]: ({state, action}) => {
    const data = normalizeApiWeatherToWeatherEntity(action?.payload);
    return {
      ...state,
      data,
      weatherChosedIndex: 0,
    };
  },
  [TypeActionsStateProvider.SET_CURRENT_WEATHER]: ({state, action}) => {
    const targetIndex = Number(action?.payload);

    if (targetIndex >= 0 && targetIndex <= state.data.data.length - 1) {
      return {
        ...state,
        weatherChosedIndex: Number(action?.payload),
      };
    }

    return state;
  },
};

export default actions;
