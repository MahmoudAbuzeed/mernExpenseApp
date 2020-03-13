import {
   USER_SAVED   
  } from '../actions/types';



  const INITIAL_STATE = {
    saved: false,
    user: [],
  };


  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case USER_SAVED:
        return { ...state, saved: true };
        default:
        return state;
    }
}
