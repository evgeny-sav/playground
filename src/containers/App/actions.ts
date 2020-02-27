import { Dispatch } from 'redux';
import {
  FetchActionPayload,
  FetchErrorAction,
  FetchSuccessAction,
  FetchSuccessActionPayload,
} from './types';
import { ActionTypes } from './constants';
import { loading } from '../../components/Loading/actions';

export const fetchStarted = (payload: FetchActionPayload) => ({
  type: ActionTypes.Fetch,
  payload,
});

export const fetchError = (e: string): FetchErrorAction => ({
  type: ActionTypes.FetchError,
  payload: e,
});

export const fetchSuccess = (
  payload: FetchSuccessActionPayload,
): FetchSuccessAction => ({
  type: ActionTypes.FetchSuccess,
  payload,
});

export const fetchAll = (data: FetchActionPayload) => async (
  dispatch: Dispatch,
) => {
  dispatch(loading(true));
  dispatch(fetchStarted(data));
  try {
    const response = await fetch('https://randomuser.me/api/');
    const { results } = await response.json();
    console.log('RESULTS', results);
    dispatch(fetchSuccess({ data: results }));
    dispatch(loading(false));
  } catch (e) {
    dispatch(fetchError(e.message));
    dispatch(loading(false));
  }
};
