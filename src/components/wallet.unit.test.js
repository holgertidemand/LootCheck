import React from 'react';
import { shallow } from 'enzyme';
import Wallet from './wallet';

describe('Wallet', () => {
  const wallet = shallow(<Wallet />);

  it('should render properly', () => {
    expect(wallet).toMatchSnapshot();
  })
})
