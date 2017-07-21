import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import GreetMessage from '../../src/GreetMessage';

describe('<GreetMessage />', () => {
  it('greets the passed name', () => {
    const component = shallow(
      <GreetMessage name={'Me'} />
    );

    expect(component).to
      .containMatchingElement(
        <strong>Hello Me!</strong>
      );
  });
});
