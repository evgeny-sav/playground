import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import thunk from 'redux-thunk';
import AppReducer from '../containers/App/reducers';
import loadingReducer from '../components/Loading/reducers';

const composeEnhancers = composeWithDevTools({});
const rootReducer = combineReducers({
  app: AppReducer,
  loading: loadingReducer,
});
const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, composeEnhancers(middleware));

export default store;
