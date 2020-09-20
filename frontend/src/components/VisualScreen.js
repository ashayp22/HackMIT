import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Stock from './Stock.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StockSearch from './StockSearch.js'

export default class VisualScreen extends React.Component{

    constructor(props) {
        super(props)

        this.state = ({
          companyticker: [],
          dates: "",
          high: "",
          low: "",
          open: "",
          volume: "",
          ticker: "",
          company: "",
          sector: "",
          twitter: "",
          score: "",
          frequency: [],
          words: []
        })

        this.updateStock = this.updateStock.bind(this)

    }
    componentDidMount() {

      fetch('http://localhost:5000/todo/api/v1.0/tickers', {header: {"access-control-allow-origin" : "*"}})
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        var ticker = json["data"][0]['ticker']
        var companies = json["data"][0]['name']

        var data = []

        for(var i = 0; i < ticker.length; i++) {
          data.push([ticker[i], ticker[i]])
          data.push([companies[i], ticker[i]])
        }
        console.log("data")
        console.log(data)

        this.setState({
          companyticker: data,
          dates: this.state.dates,
          high: this.state.high,
          low: this.state.low,
          open: this.state.open,
          volume: this.state.volume,
          ticker: this.state.ticker,
          company: this.state.company,
          sector: this.state.sector,
          score: this.state.score,
          twitter: this.state.twitter,
          frequency: this.state.frequency,
          words: this.state.words
        })
        // console.log(json["data"][0]['dates'])
      });

    }
  
    componentWillUnmount() {
    }

    test() {

    }

    updateStock(ticker, date) {

      fetch('http://localhost:5000/todo/api/v1.0/data/' + date + "/" + ticker, {header: {"access-control-allow-origin" : "*"}})
      .then((response) => {
        return response.json();
      })
      .then((json) => {

        console.log("-------------------------------------------------")
        console.log(json["data"][0])

        this.setState({
          companyticker: this.state.companyticker,
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
    

      });

      
    }

  render() {

    let centerStyle = {
      textAlign: 'center'
    }

      return (

        <div style={centerStyle}>
          <StockSearch updateStock = {this.updateStock} data = {this.state.companyticker} onClick = {this.props.onClick}></StockSearch>
            <br></br>

            {this.state.volume.length != 0
            
            ?
            <Stock game = {false} frequency = {this.state.frequency} words = {this.state.words} twitter = {this.state.twitter} stopGame = {this.test} sector = {this.state.sector} company = {this.state.company} ticker = {this.state.ticker} dates = {this.state.dates} high = {this.state.high} low = {this.state.low} open = {this.state.open} volume = {this.state.volume}></Stock>
            :
            null
            }

        </div>

            



      );
  }
}

