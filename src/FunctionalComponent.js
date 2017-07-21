import React from 'react';
import GreetMessage from './GreetMessage';

const FunctionalComponent = ({ name, onButtonClick, disabled }) => (
  <div>
    <GreetMessage name={name.toUpperCase()} />
    <button
      name={'button'}
      onClick={() => onButtonClick(name)}
    />
    {
      disabled
        ? <em>Sorry { name }, it's not enabled :(</em>
        : <u>It's enabled { name }! :D</u>
    }
  </div>
);

export default FunctionalComponent;
