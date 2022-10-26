import React, { Component } from 'react';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };
  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  //   handleIncrement = event => {
  //     console.log('Клікнули на збільшити');
  //     const { target } = event;
  //     setTimeout(() => {
  //       console.log(target);
  //     }, 1000);
  //   };
  //event доступний тільки в синхронному коді

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };
  render() {
    const { value } = this.state;
    return (
      <div className="Counter">
        <Value value={value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
        {/* <div className="Counter__controls">
          <button type="button" onClick={this.handleIncrement}>
            + 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            - 1
          </button>
        </div> */}
      </div>
    );
  }
}

export default Counter;
