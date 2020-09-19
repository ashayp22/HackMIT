import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";
import './style/extra.css'

export default class HomeScreen extends React.Component{

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
      border: '5px double',
      backgroundColor: '#FBCDC2',
      borderRadius: '45px',
      padding: '10px',
      width: '700px',
      height: '400px',
      boxShadow: "-4px 4px 2px gray",
    }

      return (
        <div style={divStyle}>
            <div style={centerStyle}>
              <h1 className="header">Buy or Short!</h1>

              <button className = "coolButton b1" onClick = {() => this.props.onClick(1)}>Play</button>
              <br></br>
              <button className = "coolButton b2" onClick = {() => this.props.onClick(2)}>Instructions</button>
              <br></br>
              <button className = "coolButton b3" onClick = {() => this.props.onClick(3)} >Visualize</button>
              <br></br>
              <button className = "coolButton b4" onClick = {() => this.props.onClick(4)}>Learn</button>
            </div>
        </div>
      );
  }
}

