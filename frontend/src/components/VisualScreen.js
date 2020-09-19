import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';


export default class VisualScreen extends React.Component{

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
      width: '300px',
      height: '400px'
    }


      return (
        <div style={divStyle}>
        <div style={centerStyle}>
          <h1>Data Visualization</h1>

          
        </div>
    </div>
      );
  }
}

