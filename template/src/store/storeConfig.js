import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import userReducer from '#/store/reducers/userReducer';

const logger = createLogger({ collapsed: true });

const middleware = [thunk];

if (__DEV__) {
  middleware.push(logger);
}

const reducers = combineReducers({
  user: userReducer
});

const storeConfig = () => {
  return createStore(reducers, applyMiddleware(...middleware));
};

export default storeConfig;
