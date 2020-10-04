import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Graph from './Graph.js';
import Metrics from './Metrics.js';
import TwitterEmojiGraph from "./TwitterEmojiGraph.js";
import WordCloud from './WordCloud.js'
import ReactTooltip from "react-tooltip";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Stock extends React.Component{

  constructor(props) {
    super(props)

    // this.state = ({
    //   score: 0
    // })
    // console.log("we here")
    // console.log(this.props.open)
    // console.log(this.props.dates)
    this.reformatDollar = this.reformatDollar.bind(this)

  }
  
    
    validateResponse = (userAnswer) => {


      var correctAnswer = "Short"

      var vals = this.props.open

      var change = vals[vals.length - 1] - vals[vals.length - 180];

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
            // this.setState({score: this.state.score + change});
            this.props.newStock(change);
        }
        else {
            
            var message = ""

            if(correctAnswer === "Buy") {
              message = "The stock went up by " + this.reformatDollar(change) + " dollars. You should have bought the stock😢.";
            } else {
              message = "The stock went down by " + this.reformatDollar(change) + " dollars. You should have shorted the stock😢.";
            }

            var score = this.props.getScore();
            // alert(score)

            this.props.stopGame(score, message);
        }
    }
    componentDidMount() {
    }
  
    componentWillUnmount() {
    }

    reformatDollar(money) {

      var moneyString = money.toString()

      var point = moneyString.indexOf('.');

      if(point === -1) {
        return moneyString;
      } else {
        point += 2;
        if(point !== moneyString.length - 1) {
          return moneyString + "0"
        }
        return moneyString
      }

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
              <p style = {{fontWeight: 'bold', textDecoration: 'underline', fontStyle: 'italic'}} data-tip data-for = "5year">
              5 Year Graph
            <ReactTooltip wrapper="span" id="5year" place="top" effect="solid">
              A line graph representing the stock's daily price in the last 5 years
            </ReactTooltip>
            </p>
              <Graph style = {{alignSelf: 'center'}} game = {this.props.game} volume = {this.props.volume} dates = {this.props.dates} open = {this.props.open} width={300} height={250}></Graph>
              <Metrics open = {this.props.open} game = {this.props.game} width={300} ></Metrics>
          </div>


          {this.props.game
                ? 
                <div style={divStyle}>
              <h1 data-tip data-for = "high4" className = "header2">{this.props.company}
                <ReactTooltip id="high4" place="top" effect="solid">
                  The company's "special" stock symbol called a ticker
                </ReactTooltip>
              </h1>
              <h3 data-tip data-for = "high5">{this.props.ticker}
                  <ReactTooltip id="high5" place="top" effect="solid">
                    The company's "special" stock symbol called a ticker
                  </ReactTooltip>
              </h3> 
              <h4 data-tip data-for = "high6">
                {this.props.sector}
                <ReactTooltip id="high6" place="bottom" effect="solid">
                    The industry the company is a part of
                  </ReactTooltip>
              
              </h4>
                <button className = "coolButton buy" onClick = {() => this.validateResponse("Buy")} variant = "primary">Buy</button>
                <button className = "coolButton short" onClick = {() => this.validateResponse("Short")} variant = "secondary">Short</button>
                <h3>You have made ${this.reformatDollar(this.props.score)} </h3>
                <button className = "coolButton back" variant="primary" onClick = {() => this.props.onClick(0)}>Back</button>
              </div>
                :
                <div style={divStyle}>
                <h1 data-tip data-for = "high4" className = "header2">{this.props.company}
                <ReactTooltip id="high4" place="top" effect="solid">
                  The company's "special" stock symbol called a ticker
                </ReactTooltip>
              </h1>
              <h3 data-tip data-for = "high5">{this.props.ticker}
                  <ReactTooltip id="high5" place="top" effect="solid">
                    The company's "special" stock symbol called a ticker
                  </ReactTooltip>
              </h3> 
              <h4 data-tip data-for = "high6">
                {this.props.sector}
                <ReactTooltip id="high6" place="bottom" effect="solid">
                    The industry the company is a part of
                  </ReactTooltip>
              
              </h4>
          </div>

          }

          <div style={divStyle2}>
            <h1 className = "header2">Short Term</h1>
              <TwitterEmojiGraph twitter = {this.props.twitter} width = {300} height = {200}></TwitterEmojiGraph>
              <div style = {{borderWidth: '2'}}>
                <WordCloud words = {this.props.words} frequency = {this.props.frequency}></WordCloud>
                </div>
          </div>

        </div>

        

        </Router>

      );
  }

}

