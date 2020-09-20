import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Graph from './Graph.js';
import Metrics from './Metrics.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Stock from './Stock.js'
import TwitterEmojiGraph from './TwitterEmojiGraph.js';
import ReactLoading from 'react-loading';
import './style/extra.css'

export default class Loading extends React.Component{

  constructor(props) {
    super(props)
  }

  render() {

    let centerStyle = {
        position: 'absolute',
        margin: 'auto',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        width: '200px',
        height: '200px'
      }

      function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }

      const financeAdvice = [
        {"title": "Create a Financial Calendar"},
        {"title": "Check Your Interest Rate"},
        {"title": "Track Your Net Worth"},
        {"title": "Start investing now."},
        {"title": "Don’t let the media scare you."},
        {"title": "Focus on your savings percentage."},
        {"title": "Set investment goals."},
        {"title": "Use goals to determine your time horizon."},
        {"title": "Get to know your risk tolerance."},
        {"title": "Always aim to be a millionaire, not a billionaire."},
        {"title": "Make sure to invest for the long run."},
        {"title": "Start with broad-based investments and diversify."},
        {"title": "Keep your costs low."},
        {"title": "Don’t be afraid to ask for help."},
        {"title": "Automate as much as you can."},
        {"title": "Buy Term and Invest the Rest:"},
        {"title": "Money Markets Are as Safe as Cash"},
        {"title": "Real Estate Is a Safe Investment:"},
        {"title": "Fixed-Rate Annuities Are a Bad Investment"},
        {"title": "Buy Low, Sell High"},
        {"title": "Don't sell when your stock dips"},
        {"title": "Don't buy when a stock rises"},
        {"title": "Always research companies before buying stocks"},
        {"title": "Use the power of the exponential"},
        {"title": "Start saving for retirement early"},
      ]

      var advice = financeAdvice[getRndInteger(0, financeAdvice.length-1)]["title"];
      console.log(advice)

      var profitText = ""
      if(this.props.change != 0) {
        profitText = "You just made $" + this.props.change
      }

      return (
        <div className = "centered">
          {/* <ReactLoading type={"cylon"} color={"#FFDF3F"} height={'500px'} width={'500px'}/> */}
          <h1 className = "header">{profitText}</h1>
          <p className = "advice">Here is some advice: {advice}!</p>
          <p>Please wait as we get a new challenge for you...</p>
        </div>

      );
  }

}

