import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import FunctionalComponent from '../../src/FunctionalComponent';
import GreetMessage from '../../src/GreetMessage';

describe('<FunctionalComponent />', () => {
  it('renders GreetMessage witht he right props', () => {
    const component = shallow(
      <FunctionalComponent
        name={'Me'}
      />
    );

    expect(component).to.containMatchingElement(<GreetMessage name={'ME'} />);
  });

  it('calls onButtonClick with name when button is clicked', () => {
    const spy = sinon.spy();

    const component = shallow(
      <FunctionalComponent
        name={'Me'}
        onButtonClick={spy}
      />
    );

    component.find('[name="button"]').simulate('click');

    expect(spy).to.have.been.calledWith('Me');
  });

  context('when it is disabled', () => {
    it('renders message about not being enabled', () => {
      const component = shallow(
        <FunctionalComponent
          disabled={true}
          name={'Me'}
        />
      );

      expect(component).to
        .containMatchingElement(
          <em>Sorry Me, it's not enabled :(</em>
        );
    });
  });

  context('when it is not disabled', () => {
    it('renders message about being enabled', () => {
      const component = shallow(
        <FunctionalComponent
          disabled={false}
          name={'Me'}
        />
      );

      expect(component).to
        .containMatchingElement(
          <u>It's enabled Me! :D</u>
        );
    });
  });
});
