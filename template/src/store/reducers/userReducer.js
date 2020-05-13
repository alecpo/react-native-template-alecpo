import {
  LOADING_USER,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAILURE
} from '#/store/actions/actionTypes';

const initialState = {
  isLoading: false,
  userToken: undefined,
  id: null,
  name: '',
  cpf: '',
  email: '',
  phone: '',
  birthday: ''
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_USER:
      return {
        ...state,
        isLoading: true
      };
    case USER_LOADED_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false
      };
    case USER_LOADED_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}
