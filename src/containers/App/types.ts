import { Action } from 'redux';
import { ActionTypes } from './constants';

export interface AppState {
  data: any;
}

export interface AppProps {}

export interface FetchActionPayload {
  data: {
    id: number;
  };
}

export interface FetchSuccessActionPayload {
  data: any;
}

export interface FetchSuccessAction extends Action {
  payload: FetchSuccessActionPayload;
}

export interface FetchErrorAction extends Action {
  type: ActionTypes.FetchError;
  payload: string;
}

export type AppActions = FetchErrorAction | FetchSuccessAction;
