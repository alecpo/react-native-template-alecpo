import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from '#/store/reducers/userReducer';

const middleware = [thunk];

const reducers = combineReducers({
  user: userReducer
});

const storeConfig = () => {
  return createStore(reducers, applyMiddleware(...middleware));
};

export default storeConfig;
