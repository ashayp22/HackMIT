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
    }

      return (
            <div style = {divStyle}>
                <div style = {centerStyle}>
                    <h1>Instructions</h1>
                    <p>Welcome to -Game-, the app that
                        trains your stock buying skills!
                    </p>
                    <ol>
                        <li>Press Play</li>
                        <li>Analyze the Stock Information</li>
                        <li>Pick Buy or Short to Answer</li>
                    </ol>
                    <Button onClick = {() => this.props.onClick(0)} variant = "warning">Back</Button>
                    <Button onClick = {() => this.props.onClick(1)} variant = "success">Start</Button>
                </div>
            </div>
      );
  }
}

