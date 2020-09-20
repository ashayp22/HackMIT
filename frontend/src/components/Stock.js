import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Graph from './Graph.js';
import Metrics from './Metrics.js';
import TwitterEmojiGraph from "./TwitterEmojiGraph.js";
import WordCloud from './WordCloud.js'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Stock extends React.Component{

  constructor(props) {
    super(props)

    this.state = ({
      score: 0
    })
    // console.log("we here")
    // console.log(this.props.open)
    // console.log(this.props.dates)

  }
  
    
    validateResponse = (userAnswer) => {


      var correctAnswer = "Short"

      var vals = this.props.open

      var change = vals[vals.length - 1] - vals[vals.length - 30];

      if(change > 0) {
        correctAnswer = "Buy"
      } 

      if(change < 0) {
        change = change * -1;
      }

      change *= 100;
      change = Math.round(change);
      change /= 100;

        if(userAnswer == correctAnswer){
            // alert("Good Job");
            this.setState({score: this.state.score + change});
            this.props.newStock(change);
        }
        else {
            
            var message = ""

            if(correctAnswer === "Buy") {
              message = "The stock went up by " + change + " dollars. You should have bought the stock😢.";
            } else {
              message = "The stock went down by " + change + " dollars. You should have shorted the stock😢.";
            }

            this.props.stopGame(this.state.score, message);
        }
    }
    componentDidMount() {
      console.log("mounting")
      console.log(this.props.open)
      console.log(this.props.dates)
    }
  
    componentWillUnmount() {
      console.log("unmounting")
    }

  render() {
    console.log("rendering stock component")
    console.log(this.props.open)
    console.log(this.props.dates)
    
    let divStyle = {
      textAlign: 'center',
      border: '5px solid #FFFF00',
      border: '5px solid',
    backgroundColor: '#fff',
    borderRadius: '25px',
    padding: '10px',
    boxShadow: "-4px 4px 2px gray",
      marginRight: '20px',
      marginLeft: '20px'
      // color: white
    }

    let divStyle2 = {
      textAlign: 'center',
      border: '5px solid #FFFF00',
      border: '5px solid',
    backgroundColor: '#FBCDC2',
    borderRadius: '25px',
    padding: '10px',
    boxShadow: "-4px 4px 2px gray",
      marginRight: '20px',
      marginLeft: '20px'
    }
    

      return (


        <Router>

        <div style = {{display: "flex", justifyContent: 'center', flexDirection: "row", alignItems: "center"}}>

          <div style={divStyle2}>
            <h1 className = "header2">Long Term</h1>
              <Graph style = {{alignSelf: 'center'}} volume = {this.props.volume} dates = {this.props.dates} open = {this.props.open} width={300} height={250}></Graph>
              <Metrics open = {this.props.open} width={300} ></Metrics>
          </div>


          {this.props.game
                ? 
                <div style={divStyle}>
              <h1 className = "header2">{this.props.company}</h1>
              <h3>{this.props.ticker}</h3> 
              <h4>{this.props.sector}</h4>
                <button className = "coolButton buy" onClick = {() => this.validateResponse("Buy")} variant = "primary">Buy</button>
                <button className = "coolButton short" onClick = {() => this.validateResponse("Short")} variant = "secondary">Short</button>
                <h3>You have made ${this.state.score} </h3>
                <button className = "coolButton back" variant="primary" onClick = {() => this.props.onClick(0)}>Back</button>
              </div>
                :
                <div style={divStyle}>
                <h1 className = "header2">{this.props.company}</h1>
                <h3>{this.props.ticker}</h3> 
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

