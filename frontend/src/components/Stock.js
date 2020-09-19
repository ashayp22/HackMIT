import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Graph from './Graph.js';
import Metrics from './Metrics.js';
import WordCloud from './WordCloud.js'

export default class GameScreen extends React.Component{

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
        // width: "100%",
        // height: (document.body.clientHeight) + "px",
        textAlign: 'center'
    }

    let centerStyle = {
      position: 'absolute',
    //   left: '50%',
    //   top: '50%',
    //   transform: 'translate(-50%, -50%)',
      border: '5px solid #FFFF00',
      padding: '10px',
      backgroundColor: 'white'
    }

      return (
        <div style={divStyle}>
            <div style={centerStyle}>
              <h1>Game</h1>
              {/* <Graph width={300} height={300}></Graph>
              <Metrics width={300} ></Metrics> */}
              <WordCloud></WordCloud>
            </div>
        </div>
      );
  }

}

