interface Action {
  type: string;
}
export interface PropsBuildReducer<STATE, ACTIONS, CURRENT_ACTION> {
  state: STATE;
  actions: ACTIONS;
  currentAction: Action & CURRENT_ACTION;
}

export interface PropsInstanceCurrentAction<STATE, ACTION_PROPS> {
  state: STATE;
  action: ACTION_PROPS;
}

export default function buildReducer<STATE, ACTIONS, CURRENT_ACTION>({
  state,
  currentAction,
  actions,
}: PropsBuildReducer<STATE, ACTIONS, CURRENT_ACTION>) {
  try {
    const typeCurrentAction = currentAction.type as keyof typeof actions;
    const instanceCurrentAction = actions[typeCurrentAction];
    if (typeof instanceCurrentAction === 'function') {
      return instanceCurrentAction({state, action: currentAction});
    }

    return state;
  } catch (error) {
    console.error('Reducer: ', error);
  }
}
