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
      position: 'relative',
      left: '50%',
      transform: 'translate(-50%, -0%)',
      border: '5px solid #FFFF00',
      padding: '10px',
      backgroundColor: '#f0f0f0',
      width: '350px',
      height: '100%',
      boxShadow: "-4px 4px 2px gray"
    }

    let divStyle2 = {
      textAlign: 'center',
      border: '5px solid #FFFF00',
      backgroundColor: '#f0f0f0',
      // width: '350px',
      // height: '100%',
      boxShadow: "-4px 4px 2px gray",
      // flex: '1'
    }

      return (

        <Router>

        <div style = {{display: "flex", justifyContent: 'space-around', flexDirection: "row", alignItems: "center"}}>

          <div style={divStyle2}>
            <h1>Long Term Term</h1>
                <Graph style = {{alignSelf: 'center'}} width={300} height={200}></Graph>
                  <Metrics width={300} ></Metrics>
          </div>


          {this.props.game
                ? 
                <div style={divStyle2}>
              <h1>Company Name</h1>
              <h3>{this.props.data.data.id}</h3> 
                <Button onClick = {() => this.validateResponse("Buy", "Buy")} variant = "primary">Buy</Button>
                <Button onClick = {() => this.validateResponse("Buy", "Short")} variant = "secondary">Short</Button>
                <h3>Score: {this.state.score} </h3>
              </div>
                :
                <div style={divStyle2}>
                <h1>Company Name</h1>
                <h3>{this.props.data.data.id}</h3> 
                
          </div>

          }

          <div style={divStyle2}>
            <h1>Short Term</h1>
              <TwitterEmojiGraph width = {300} height = {200}></TwitterEmojiGraph>
              <div style = {{borderWidth: '2'}}><WordCloud></WordCloud></div>
          </div>

        </div>

        

        </Router>

      );
  }

}

