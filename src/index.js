import React from 'react';
import ReactDOM from 'react-dom';

let myArray = ['blue', 'indigo', 'purple', 'cyan', 'mauve'];

function fizzbuzzNum(num) {
  if (num % 3 == 0 && num % 5 == 0) {return 'fizzbuzz';}
  else if (num % 3 == 0) {return 'fizz';}
  else if (num % 5 == 0) {return 'buzz';}
  else {return num;}
}

class Fizzbuzz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      output: 0
    };
    //this.fizzbuzzNum = this.fizzbuzzNum.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    let newCounter = this.state.counter + 1;
    let newOutput = fizzbuzzNum(newCounter);
    this.setState(state => ({
      counter: newCounter,
      output: newOutput
    }));
  }

  decrement() {
    let newCounter = this.state.counter - 1;
    let newOutput = fizzbuzzNum(newCounter);
    this.setState(state => ({
      counter: newCounter,
      output: newOutput
    }));
  }

  render() {
    return (
      <div>
        <p>Counter: { this.state.output } </p>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}

function Hello() {
  return <span>Hello</span>;
}

function World() {
  return <span> World!</span>;
}

const HelloWorld = () => {
  return (
    <div>
      <Hello/><World/>
    </div>
  )
}

function MyArrayComponent(props) {
  return (
    <ul>
      {props.items.map(el => <li>{el}</li>)}
    </ul>
  )
}

const App = () => {
  return (
    <div>
      <HelloWorld/>
      <Fizzbuzz/>
      <MyArrayComponent items={myArray}/>
    </div>
  )
}


ReactDOM.render(<App/>, document.querySelector('#root'));
