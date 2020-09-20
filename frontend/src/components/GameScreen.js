import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Graph from './Graph.js';
import Metrics from './Metrics.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Stock from './Stock.js'
import TwitterEmojiGraph from './TwitterEmojiGraph.js';
import ReactLoading from 'react-loading';
// import Loading from './Loading.js'

export default class GameScreen extends React.Component{


  constructor(props) {
    super(props)

    this.state = ({
      dates: [],
      high: [],
      low: [],
      open: [],
      volume: [],
      ticker: "a",
      company: "a"
    })

    this.randomStock()
}

  randomStock() {
  //   console.log("getting")
  //   fetch('http://localhost:5000/todo/api/v1.0/data', {header: {"access-control-allow-origin" : "*"}})
  // .then((response) => {
  //   console.log("got")
  //   return response.json();
  // })
  // .then((json) => {
  //   console.log(json);
    this.setState({
      dates: ["dates"],
      high: ["high"],
      low: ["low"],
      open: ["open"],
      volume: ["volume"],
      ticker: "aapl",
      company: "apple"
    })
  }


    componentDidMount() {
        
    }
  
    componentWillUnmount() {

    }

    
  render() {
    console.log()
      return (
        <Router>
          {/* <Loading></Loading> */}
          <Stock game = {true} company = {this.state.company} ticker = {this.state.ticker} dates = {this.state.dates} high = {this.state.high} low = {this.state.low} open = {this.state.open} volume = {this.state.volume} onClick = {this.props.onClick} stopGame = {this.props.stopGame} data = {this.props.data}></Stock>
        </Router>
      );
  }

}

