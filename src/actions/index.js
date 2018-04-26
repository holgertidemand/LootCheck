import { SET_BALANCE } from './constants';

export function setBalance(balance) {
  return {
    type: SET_BALANCE,
    payload: balance
  };
}