import {
    USER_SAVED
  } from './types';

  import { addErrorMessage, clearErrorMessages } from './error_actions';

  import {
    apiRegister
  } from '../api/user';

  export const saveUser = user => {
    return async dispatch => {
      try {
        dispatch(clearErrorMessages());
        await apiRegister(user);
        dispatch({ type: USER_SAVED });
      } catch (e) { 
        dispatch(addErrorMessage(e));
      }
    };
  };

  