import { Action } from 'redux';

export interface State {
  isLoading: boolean;
}

export interface ErrorAction extends Action {
  payload: boolean;
}

export interface SuccessAction extends Action {
  payload: boolean;
}

export type LoadingAction = ErrorAction | SuccessAction;
