import balanceReducer from './reducer_balance';
import * as constants from '../actions/constants';

describe('Balance Reducer', () => {
  it('set balance on `state`', () => {
    const balance = 10; 
    const expectedState = { balance };
    const action = {
      type: constants.SET_BALANCE,
      payload: balance
    };
   
    expect(balanceReducer(null, action)).toEqual(expectedState);
  });
});