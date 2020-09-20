import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import './style/extra.css'

export default class RestartScreen extends React.Component{

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
      width: '400px',
      height: '500px'
    }

      return (

        <div style={divStyle}>
            <div style={centerStyle}>
              <h1 className = "header">Game Over</h1>
                <p>Your final earnings have been ${this.props.finalScore}</p>
                <p>{this.props.message}</p>
              <button className = "coolButton b2" onClick = {() => this.props.click(1)}>Play Again</button>
              <br></br>
              <button className = "coolButton back" onClick = {() => this.props.click(0)}>Go to Home</button>
            </div>
        </div>
      );
  }

  
}

