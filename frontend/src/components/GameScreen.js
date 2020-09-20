import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Graph from './Graph.js';
import Metrics from './Metrics.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Stock from './Stock.js'
import TwitterEmojiGraph from './TwitterEmojiGraph.js';
import ReactLoading from 'react-loading';

import Loading from './Loading.js'


export default class GameScreen extends React.Component{


  constructor(props) {
    super(props)

    this.state = ({
      dates: [],
      high: [],
      low: [],
      open: [],
      volume: [],
      twitter: [],
      ticker: "",
      company: "",
      sector: "",
      change: 0,
      score: 0,
      frequency: [],
      words: []
    })
    this.randomStock = this.randomStock.bind(this)
    this.getScore = this.getScore.bind(this)

}

  randomStock(change) {
    
    this.setState({
      dates: [],
      high: [],
      low: [],
      open: [],
      volume: [],
      ticker: "",
      company: "",
      sector: "",
      change: change,
      twitter: [],
      score: this.state.score + change,
      frequency: [],
      words: []
    })


    fetch('http://localhost:5000/todo/api/v1.0/data', {header: {"access-control-allow-origin" : "*"}})
  .then((response) => {
    console.log("got")
    return response.json();
  })
  .then((json) => {
    console.log(json);
    this.setState({
      dates: json["data"][0]['dates'],
      high: json["data"][0]['high'],
      low: json["data"][0]['low'],
      open: json["data"][0]['open'],
      volume: json["data"][0]['volume'],
      ticker: json["data"][0]['ticker'],
      company: json["data"][0]['company-name'],
      sector: json["data"][0]['sector'],
      twitter: json["data"][0]['twitter'],
      words: json["data"][0]['news-words'],
      frequency: json["data"][0]['news-frequency'],
      score: this.state.score
    })
    console.log(json["data"][0]['twitter'])
  });
  }

    componentDidMount() {
      this.randomStock(0)
    }
  
    componentWillUnmount() {

    }

    getScore() {
      return this.state.score
    }
    
  render() {

    console.log("rendering")
      return (
        <Router>

          {this.state.company.length == 0
          ?
          <Loading change = {this.state.change}></Loading>
          :
          <Stock getScore = {this.getScore} words = {this.state.words} frequency = {this.state.frequency} twitter = {this.state.twitter} score = {this.state.score} game = {true} sector = {this.state.sector} newStock = {this.randomStock} company = {this.state.company} ticker = {this.state.ticker} dates = {this.state.dates} high = {this.state.high} low = {this.state.low} open = {this.state.open} volume = {this.state.volume} onClick = {this.props.onClick} stopGame = {this.props.stopGame} data = {this.props.data}></Stock>
          }
        </Router>
      );
  }

}

