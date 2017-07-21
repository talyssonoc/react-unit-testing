import React from 'react';
import FunctionalComponent from './FunctionalComponent';

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.initialName
    };

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    return (
      <div>
        { this.state.name }
        <input
          name={'name'}
          onChange={this.handleNameChange}
        />

        <FunctionalComponent
          name={this.state.name}
          onButtonClick={(name) => alert(`${name}!`)}
        />
      </div>
    );
  }
}

export default ClassComponent;
