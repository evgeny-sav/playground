import { ActionTypes } from './constants';
import { LoadingAction, State, SuccessAction } from './types';

export const initialState: State = {
  isLoading: true,
};

const actions = {
  [ActionTypes.Loading]: (_: any, action: SuccessAction) => ({
    ...initialState,
    isLoading: action.payload,
  }),
};

const loadingReducer = (state = initialState, action: LoadingAction) =>
  actions[action.type] ? actions[action.type](state, action) : state;

export default loadingReducer;
