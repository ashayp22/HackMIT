import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';


export default class InstructionScreen extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            
        }

    }
    componentDidMount() {
    }
  
    componentWillUnmount() {
    }
  render() {
    let divStyle = {
        width: "100%",
        height: (document.body.clientHeight) + "px",
        textAlign: 'center',
    }
    let bgStyle = {
        backgroundColor: 'white',
        borderRadius: '25px',
        padding: '3em',
    }
    let centerStyle = {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      border: '5px solid',
      backgroundColor: '#FBCDC2',
      borderRadius: '25px',
      padding: '10px',
      width: '50vw',
      height: '70vh',
      boxShadow: "-4px 4px 2px gray",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }

      return (
            <div style = {divStyle}>
                <div style = {centerStyle}>
                    <h1 className = "header">Instructions</h1>
                    <p>Welcome to Buy or Short!, where we teach you the fundamentals of investing!</p>
                    <ol style = {bgStyle}>
                        <li>Press play</li>
                        <li>Analyze the long term and short term data for the stock</li>
                        <li>Choose to buy or short the stock</li>
                        <li>Rinse and repeat until you pick incorrectly</li>
                        <li>After you lose, the SWAT will bust in and arrest you for insider trading</li>
                        <li>( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)</li>
                    </ol>
                    <div style = {{display: 'flex', justifyContent: 'center'}}>
                        <button className = "coolButton back" onClick = {() => this.props.onClick(0)} variant = "warning">Back</button>
                        <button className = "coolButton b2" onClick = {() => this.props.onClick(1)} variant = "success">Start</button>
                    </div>
                </div>
            </div>
      );
  }
}

