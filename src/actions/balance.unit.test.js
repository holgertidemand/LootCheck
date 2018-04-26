import * as constants from './constants';
import * as actions from './index';

it('creates an action to set balance', () => {
  const balance = 0;
  const exprectedRespone = { 
    type: constants.SET_BALANCE,
    payload: balance 
  };

  expect(actions.setBalance(balance)).toEqual(exprectedRespone);
})