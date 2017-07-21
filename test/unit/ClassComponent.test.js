import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ClassComponent from '../../src/ClassComponent';
import FunctionalComponent from '../../src/FunctionalComponent';

describe('<ClassComponent />', () => {
  it('has correct initial state', () => {
    const component = shallow(
      <ClassComponent
        initialName={'Me'}
      />
    );

    expect(component.state()).to.eql({
      name: 'Me'
    });
  });

  it('updates state when name input changes', () => {
    const component = shallow(
      <ClassComponent
        initialName={'Me'}
      />
    );

    component.find('[name="name"]').simulate('change', {
      target: {
        value: 'New name'
      }
    });

    expect(component.state()).to.eql({
      name: 'New name'
    });
  });

  it('renders FunctionalComponent with the right props', () => {
    const component = shallow(
      <ClassComponent
        initialName={'Me'}
      />
    );

    expect(component).to
      .containMatchingElement(
        <FunctionalComponent
          name={'Me'}
        />
      );
  });
});
