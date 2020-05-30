/* eslint-disable camelcase */
import {
  LOADING_USER,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAILURE
} from './actionTypes';

export const loadingUser = () => ({
  type: LOADING_USER
});
export const userLoadedSuccess = user => ({
  type: USER_LOADED_SUCCESS,
  payload: user
});
export const userLoadedFailure = () => ({
  type: USER_LOADED_FAILURE
});

export const onLogin = () => dispatch => {
  dispatch(loadingUser());
};
