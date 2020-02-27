import { Store } from '../../store/types';

export const appSelector = (store: Store) => store.app;
export const loadingSelector = (store: Store) => store.loading.isLoading;
