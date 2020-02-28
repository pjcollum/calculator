import React, { Component } from 'react'

import './App.css';

class App extends Component {
  state = {
    result: '',
    firstVal:'',
    secondVal:''
    
  }

  //add function
  // when add is pressed firstVal is complete and open secondVal. array.push???
  // when equals is pressed add first val and second val

   equals = () => {
     this.setState({
       result: this.state.firstVal + this.state.secondVal
     })
  }
  // decrement = () => {
  //   this.setState({
  //     result: this.state.result - 1
  //   });
  // }
  // divide2 = () => {
  //   this.setState({
  //     result: this.state.result / 2
  //   });
  // }
  reset = () => {
    this.setState({
      result: "",

    });
  }


  getValue = (val) => {
    this.setState({
      result: this.state.result + [val]
    })
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
          <div className="box"><h1>+</h1> <button onClick={this.add}>Increment my counter</button></div>
          <div className="box"><h1>x</h1></div>
        </div>

        <div className="numbers">
          <div className="row1">
            <div className="num"><button onClick={()=> this.getValue(7)}>Seven</button></div>
            <div className="num"><button onClick={()=> this.getValue(8)}>Eight</button></div>
            <div className="num"><button onClick={()=> this.getValue(9)}>Nine</button></div>
          </div>
          <div className="row2">
            <div className="num"><button onClick={()=> this.getValue(4)}>Four</button></div>
            <div className="num"> <button onClick={()=> this.getValue(5)}>Five</button></div>
            <div className="num"> <button onClick={()=> this.getValue(6)}>Six</button></div>

          </div>
          <div className="row3">
            <div className="num"><button onClick={()=> this.getValue(1)}>One</button></div>
            <div className="num"> <button onClick={()=> this.getValue(2)}>Two</button></div>
            <div className="num"> <button onClick={()=> this.getValue(3)}>Three</button></div>
          </div>
          <div className="row4">
            <div className="num1"><button onClick={()=> this.getValue(0)}>Zero</button></div>
            <div className="equals"><h1>=</h1> <button onClick={this.equals} >EQUALS</button></div>

          </div>
        </div>
      </div>
    )
  }
}
export default App