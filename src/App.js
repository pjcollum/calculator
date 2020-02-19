import React, { Component } from 'react'

import './App.css';

class App extends Component {
  state = {
    result: 0,
  }
  increment = () => {
    this.setState({
      result: this.state.result + 1
    })
  }
  decrement = () => {
    this.setState({
      result: this.state.result - 1
    });
  }
  divide2 = () => {
    this.setState({
      result: this.state.result / 2
    });
  }
  reset = () => {
    this.setState({
      result: 0,

    });
  }
  one = () => {
    this.setState({
      result: 1,

    });
  }
  two = () => {
    this.setState({
      result: 2,

    });
  }
  three = () => {
    this.setState({
      result: 3,

    });
  }
  four = () => {
    this.setState({
      result: 4,

    });
  }
  five = () => {
    this.setState({
      result: 5,

    });
  }
  six = () => {
    this.setState({
      result: 6,

    });
  }
  seven = () => {
    this.setState({
      result: 7,

    });
  }
  eight = () => {
    this.setState({
      result: 8,
    });
  }
  nine = () => {
    this.setState({
      result: 9,

    });
  }
  zero = () => {
    this.setState({
      result: 0,

    });
  }


  render() {
    return (
      <div className="container">

        <div className="result">
          <h1>My Current counter is {this.state.result}</h1>
        </div>

        <div className="clear">
          <button onClick={this.reset}>Reset counter</button>
        </div>

        <div className="methods">
          <div className="box"><h1>/</h1><button onClick={this.divide2}>Divide my counter by two</button></div>
          <div className="box"><h1>-</h1><button onClick={this.decrement}>Decrement my counter</button></div>
          <div className="box"><h1>+</h1> <button onClick={this.increment}>Increment my counter</button></div>
          <div className="box"><h1>x</h1></div>
        </div>

        <div className="numbers">
          <div className="row1">
            <div className="num"><h1>7</h1> <button onClick={this.seven}>Seven</button></div>
            <div className="num"><h1>8</h1> <button onClick={this.eight}>Eight</button></div>
            <div className="num"><h1>9</h1> <button onClick={this.nine}>Nine</button></div>
          </div>
          <div className="row2">
            <div className="num"><h1>4</h1> <button onClick={this.four}>Four</button></div>
            <div className="num"><h1>5</h1> <button onClick={this.five}>Five</button></div>
            <div className="num"><h1>6</h1> <button onClick={this.six}>Six</button></div>

          </div>
          <div className="row3">
            <div className="num"><h1>1</h1> <button onClick={this.one}>One</button></div>
            <div className="num"><h1>2</h1> <button onClick={this.two}>Two</button></div>
            <div className="num"><h1>3</h1> <button onClick={this.three}>Three</button></div>
          </div>
          <div className="row4">
            <div className="num1"><h1>0</h1> <button onClick={this.zero}>Zero</button></div>
            <div className="equals"><h1>=</h1> <button >EQUALS</button></div>

          </div>
        </div>
      </div>
    )
  }
}
export default App