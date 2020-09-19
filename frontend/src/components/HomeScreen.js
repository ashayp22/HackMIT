import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';

export default class HomeScreen extends React.Component{

    // constructor(props) {
    //     super(props)

    //     this.state = {
            
    //     }

    // }
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
      border: '5px solid #FFFF00',
      padding: '10px'
    }

      return (
        <div style={divStyle}>
            <div style={centerStyle}>
              <h1>Game</h1>
              <Button onClick = {() => this.props.onClick(1)} variant="primary">Play</Button>
              <br></br>
              <Button onClick = {() => this.props.onClick(2)} variant="secondary">Instructions</Button>
              <br></br>
              <Button onClick = {() => this.props.onClick(3)} variant="success">Visualize</Button>
              <br></br>
              <Button onClick = {() => this.props.onClick(4)} variant="warning">Learn</Button>
            </div>
        </div>
      );
  }
}

