const bindActionCreator =
  <DISPATCH, ACTIONS>(
    dispatch: React.Dispatch<DISPATCH>,
    actionCreator: Function,
  ) =>
  (args: keyof ACTIONS) =>
    dispatch(actionCreator(args));

export default function bindActionCreators<DISPATCH, ACTIONS>(
  dispatch: React.Dispatch<DISPATCH>,

  actionCreators: ACTIONS,
) {
  let binds: ACTIONS | Object = {};

  for (const action in actionCreators) {
    binds = {
      ...binds,
      [action]: bindActionCreator<DISPATCH, ACTIONS>(
        dispatch,
        actionCreators[action] as unknown as Function,
      ),
    };
  }

  return binds;
}
