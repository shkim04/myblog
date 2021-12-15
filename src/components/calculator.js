import React, { Component } from 'react';
import './calculator.css';

const buttons = [
    {button: 'AC', id: 'clear'},
    {button: '*', id: 'multiply'},
    {button: '/', id: 'divide'},
    {button: '1', id: 'one'},
    {button: '2', id: 'two'},
    {button: '3', id: 'three'},
    {button: '+', id: 'add'},
    {button: '4', id: 'four'},
    {button: '5', id: 'five'},
    {button: '6', id: 'six'},
    {button: '-', id: 'subtract'},
    {button: '7', id: 'seven'},
    {button: '8', id: 'eight'},
    {button: '9', id: 'nine'},
    {button: '.', id: 'decimal-point'},
    {button: '0', id: 'zero'},
    {button: '=', id: 'equals'},
]
  
const isOperator = /[+\-*/]/,
      endsWithOperator = /[+\-*/]$/, endsWithZero = /[+\-*/](0)$/;
    
export default class Calculator extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
            currentVal: '0',
            inputFormula: '',
            calculated: false
        }
        this.displayInOut = this.displayInOut.bind(this);
        this.clearDisplay = this.clearDisplay.bind(this);
        this.compute = this.compute.bind(this);
    }
    
    displayInOut(button) {
        const {currentVal, inputFormula, calculated} = this.state;

        if(button === '=') {
            /^[0-9].*[0-9]$/.test(inputFormula) ? 
            this.setState({
                currentVal: this.compute(inputFormula),
                inputFormula: '',
                calculated: true
            }) : 
            this.setState({
                currentVal: '0',
                inputFormula: '',
                calculated: false
            })
        }
        else if(button === '.') {
            calculated === true ? 
            this.setState({
                currentVal: button,
                inputFormula: currentVal + button,
                calculated: false
            }) : 
            this.setState({
                currentVal: button,
                inputFormula: inputFormula === '' ? 
                              currentVal + button
                            : endsWithOperator.test(inputFormula) ?
                                inputFormula + '0' + button
                                : inputFormula + button
            })
        }
        else if(!isOperator.test(button)) {
            calculated === true ? 
            this.setState({
                currentVal: currentVal,
                inputFormula: '',
                calculated: true
            }) : 
            this.setState({
                currentVal: button,
                inputFormula: endsWithZero.test(inputFormula) ?
                              inputFormula.replace(inputFormula.match(endsWithZero)[1], button)
                              : inputFormula + button
            })
        }
        else {
            calculated === true ? 
            this.setState({
                currentVal : button,
                inputFormula: currentVal + button,
                calculated: false
            }) :
            this.setState({
                currentVal: button,
                inputFormula: endsWithOperator.test(inputFormula) ? 
                              inputFormula.replace(inputFormula.match(endsWithOperator), button)
                              : inputFormula + button,
            })
        }
    
    }

    compute(string) {
        const cal = (a, op, b) => {
            switch(op) {
                case '+': return +a + +b;
                case '-': return a - b;
                case '*': return a * b;
                case '/': return a / b;
                case ')': return this.compute(a);
                default: break;
            }
        };
              
        let regexes = [
            /\(([^()]+)(\))/g,
            /(-?\d+(?:\.\d+)?)\s*([*/])\s*(-?\d+(?:\.\d+)?)/,
            /(-?\d+(?:\.\d+)?)\s*([+-])\s*(-?\d+(?:\.\d+)?)/,
        ];
        let found;
        for (let regex of regexes) {
            do {
                found = false;
                string = string.replace(regex, (_, ...args) => {
                    return Math.round(cal(...args) * 1000000000000) / 1000000000000;
                });
                if(regex.test(string)){
                    found = true;
                }
            } while (found);
        }
        return string;
    }
    
    clearDisplay() {
        this.setState({
            currentVal: '0',
            inputFormula: '',
            calculated: false
        })
    }
    
    render() {                           
      return (
        <div id='calculator' className='clearfix'>
            <h3 className='sub-title'># Calculator</h3>
            <div className='calculator-box'>
                <div id='calculator-container'>
                    <div id='display'>
                        <div className='display-input'>
                            {this.state.inputFormula}
                        </div>
                        <div className='display-output'>
                            {this.state.currentVal}
                        </div>
                    </div>
                    <PadBox 
                        clearDisplay={this.clearDisplay}
                        display={this.displayInOut}
                    />    
                </div>
            </div>
            <div className='description-calculator'>
                This calculator is a small project I did on <a href='http://www.freecodecamp.org' className='freecodecamp'><i>freecodecamp.org</i></a> that all the people in tech might know. I was trying to follow the 
                sample they want users to make. I tried to code by myself. In the period of this time, I think I could know how React works 
                better.
            </div>
        </div>
      )
    }
}
  
class PadBox extends Component {
    
    render() {
        let button = buttons.map(el => { 
                                return (
                                    <Buttons 
                                        id={el.id}
                                        key={el.id}
                                        button={el.button}
                                        clearDisplay={this.props.clearDisplay}
                                        display={this.props.display}
                                    />
                                )}
                            );
                               
        return (        
            <>
                {button}
            </>
        )
    }
}
  
class Buttons extends Component {
    constructor(props) {
        super(props);
      
        this.displayUpdate = this.displayUpdate.bind(this);
    }
    
    displayUpdate() {
        this.props.display(this.props.button);
    }
    
    render() {
        return (
            this.props.button === 'AC' ? 
            <button className='btn'
                id={this.props.id}
                onClick={this.props.clearDisplay}
            >
                {this.props.button}
            </button> :
            <button className='btn'
                id={this.props.id}
                onClick={this.displayUpdate}
            >
                {this.props.button}
            </button>
        );
    }
}
  