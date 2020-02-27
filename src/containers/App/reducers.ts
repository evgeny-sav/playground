import { Reducer } from 'redux';
import { ActionTypes } from './constants';
import {
  AppActions,
  AppState,
  FetchErrorAction,
  FetchSuccessAction,
} from './types';

export const initialState: AppState = {
  data: {},
};

const actions = {
  [ActionTypes.Fetch]: (state: any) => state,
  [ActionTypes.FetchError]: (_: any, action: FetchErrorAction) => {
    throw Error(action.payload);
  },
  [ActionTypes.FetchSuccess]: (_: any, action: FetchSuccessAction) =>
    action.payload,
};

const AppReducer: Reducer<AppState, AppActions> = (
  state = initialState,
  action: AppActions,
) => (actions[action.type] ? actions[action.type](state, action) : state);

export default AppReducer;
