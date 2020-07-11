import React from 'react';
import './App.css'
import Button from './components/Button.js'
import Input from './components/Input.js'
import ClearButton from './components/ClearButton.js'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      input: "",
      prevNumber: "",
      curNumber: "",
      operator: "",
    }

  }

//adds functionality that if i click on 
//one of the buttons it adds it to the input area
addToInput = val => {
  this.setState({input: this.state.input + val})
}

//adds functionality to 0 specifically to make sure 
//that it is not the first number inputted.
addZeroToInput = (val) =>{
  if(this.state.input !== ""){
    return this.addToInput(val)
  }
}

//add functionality for the decimal point
//decimal points can only be present once
// -1 means its not there 

addDecimalToInput = val =>{
  if(this.state.input.indexOf(".") === -1){
    return this.addToInput(val)
  }
}

//adds functionality for the clear button
clearInput = () => {
  this.setState({input: ""});
}

//allows for add functionality 
add = () => {

  //storing preivous number so when we get the current number 
  // the program will still have access to both numbers
  this.state.prevNumber = this.state.input;
  //now were clearing out the inputs current state 
  //so we can enter the new number
  this.setState({input: ""});
  this.state.operator = "plus";
}

multiply = () => {
  this.state.prevNumber = this.state.input;
  this.setState({input:" "});
  this.state.operator = "multiply"
}

divide = () => {
  this.state.prevNumber = this.state.input;
  this.setState({input: " "});
  this.state.operator = "divide"
}

subtract = () => {
  this.state.prevNumber = this.state.input;
  this.setState({input: " "});
  this.state.operator = "subtract"
}

equal = () =>{
  this.state.curNumber = this.state.input;
  if(this.state.operator === "plus"){
    this.setState({
      input:parseInt(this.state.prevNumber) + parseInt(this.state.curNumber)
    })
  }
  if(this.state.operator === "multiply"){
    this.setState({
      input: parseInt(this.state.prevNumber) * parseInt(this.state.curNumber)
    })
  }
  if(this.state.operator === "divide"){
    this.setState({
      input: parseInt(this.state.prevNumber) / parseInt(this.state.curNumber)
    })
  }
  if(this.state.operator === "subtract"){
    this.state.curNumber = this.state.input;
    this.setState({
      input: parseInt(this.state.prevNumber) - parseInt(this.state.curNumber)
    })
  }
}

  render(){
    

    return(
      <div>
        <div className="calc-wrapper">
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>
            <div className="row">
                  <Button handleClick={this.addToInput}>7</Button>
                  <Button handleClick={this.addToInput}>8</Button>
                  <Button handleClick={this.addToInput}>9</Button>
                  <Button handleClick={this.divide}>/</Button>
            </div>
            <div className="row">
                  <Button handleClick={this.addToInput}>4</Button>
                  <Button handleClick={this.addToInput}>5</Button>
                  <Button handleClick={this.addToInput}>6</Button>
                  <Button  handleClick={this.multiply}>*</Button>
            </div>
            <div className="row">
                  <Button handleClick={this.addToInput}>1</Button>
                  <Button handleClick={this.addToInput}>2</Button>
                  <Button handleClick={this.addToInput}>3</Button>
                  <Button handleClick={this.add}>+</Button>
            </div>
            <div className="row">
                  <Button handleClick={this.addDecimalToInput}>.</Button>
                  <Button handleClick={this.addZeroToInput}>0</Button>
                  <Button handleClick={this.equal}>=</Button>
                  <Button handleClick={this.divide}>-</Button>
            </div>
            <div className="row">
                  <ClearButton handleClear={this.clearInput}>Clear</ClearButton>

            </div>
          </div>
      </div>
    )
  }
}



export default App;