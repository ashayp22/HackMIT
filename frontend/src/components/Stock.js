import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Graph from './Graph.js';
import Metrics from './Metrics.js';
import TwitterEmojiGraph from "./TwitterEmojiGraph.js";
import WordCloud from './WordCloud.js'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Stock extends React.Component{

    state = {
      score: 0
    } 
    
    validateResponse = (userAnswer, correctAnswer) => {
        if(userAnswer == correctAnswer){
            // alert("Good Job");
            this.setState({score: this.state.score + 1});
        }
        else {
            // alert("You Lose");
            this.props.stopGame(this.state.score);
        }
    }
    componentDidMount() {
        
    }
  
    componentWillUnmount() {

    }

  render() {


    let divStyle = {
      textAlign: 'center',
      border: '5px solid #FFFF00',
      border: '5px solid',
      backgroundColor: '#fff',
      borderRadius: '25px',
      padding: '1em',
      boxShadow: "-4px 4px 2px gray",
      margin: '3em'
      // color: white
    }

    let divStyle2 = {
      border: '5px solid black',
      backgroundColor: '#FBCDC2',
      borderRadius: '25px',
      boxShadow: "-4px 4px 2px gray",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '1em'
    }
    

      return (


        <Router>

        <div style = {{display: "flex", justifyContent: 'space-evenly', flexDirection: "row", alignItems: "center"}}>

          <div style={divStyle2}>
            <h1 className = "header2">Long Term</h1>
                <Graph width={300} height={200}></Graph>
                  <Metrics width={300} ></Metrics>
          </div>


          {this.props.game
                ? 
                <div style={divStyle}>
              <h1 className = "header2">Company Name</h1>
              <h3>Enter ticker here</h3> 
                <button className = "coolButton buy" onClick = {() => this.validateResponse("Buy", "Buy")} variant = "primary">Buy</button>
                <button className = "coolButton short" onClick = {() => this.validateResponse("Buy", "Short")} variant = "secondary">Short</button>
                <h3>Score: {this.state.score} </h3>
                <button className = "coolButton back" variant="primary" onClick = {() => this.props.onClick(0)}>Back</button>
              </div>
                :
                <div style={divStyle}>
                <h1>Company Name</h1>
                <h3>Enter ticker here</h3> 
          </div>

          }

          <div style={divStyle2}>
            <h1 className = "header2">Short Term</h1>
              <TwitterEmojiGraph width = {300} height = {200}></TwitterEmojiGraph>
              <div style = {{borderWidth: '2'}}><WordCloud></WordCloud></div>
          </div>

        </div>

        

        </Router>

      );
  }

}

