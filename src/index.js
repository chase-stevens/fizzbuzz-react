import React from 'react';
import ReactDOM from 'react-dom';

class Fizzbuzz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      output: 0
     };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState(state => ({
      counter: state.counter + 1,
      output: (state.counter + 1) % 3 == 0 && (state.counter + 1) % 5 == 0 ? 'fizzbuzz' :
              (state.counter + 1) % 3 == 0 ? 'fizz' :
              (state.counter + 1) % 5 == 0 ? 'buzz' :
               state.counter + 1
    }));
  }

  render() {
    return (
      <div>
        <p>Counter: { this.state.output } </p>
        <button onClick={this.increment}>Press Me</button>
      </div>
    )
  }
}

ReactDOM.render(<Fizzbuzz/>, document.querySelector('#root'));
