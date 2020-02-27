import { ActionTypes } from './constants';

export const loading = (payload: boolean) => {
  console.log('LOADING', payload);
  return {
    type: ActionTypes.Loading,
    payload,
  };
};
