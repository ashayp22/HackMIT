import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Graph from './Graph.js';
import Metrics from './Metrics.js';
import TwitterEmojiGraph from "./TwitterEmojiGraph.js";
import WordCloud from './WordCloud.js'
export default class Stock extends React.Component{

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
        textAlign: 'center'
    }

    let centerStyle = {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      border: '5px solid #FFFF00',
      padding: '10px',
      backgroundColor: '#f0f0f0',
      width: '50vw',
      height: '70vh',
      boxShadow: "-4px 4px 2px gray",
    }

      return (
        <div style={divStyle}>
            <div style={centerStyle}>
              <h1 style = {{textAlign: 'center'}}>Company Name</h1>
              <h3>{this.props.data.data.id}</h3> 
              <Graph width={200} height={200}></Graph>
              <Metrics width={300}></Metrics>
              <TwitterEmojiGraph width = {100} height = {100}></TwitterEmojiGraph>
              <div style = {{borderWidth: '2'}}><WordCloud></WordCloud></div>

            </div>
        </div>
      );
  }

}

