import { AppState } from '../containers/App/types';

export interface Store {
  app: AppState;
  loading: {
    isLoading: boolean;
  };
}
