import { SET_BALANCE } from '../actions/constants';

function setBalance(state = {}, action) {
  switch(action.type) {
    case SET_BALANCE:
      return { balance: action.payload }
    default:
     return state;
  }
}

export default setBalance;