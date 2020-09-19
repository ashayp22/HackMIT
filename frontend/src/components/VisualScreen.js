import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Stock from './Stock.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StockSearch from './StockSearch.js'

export default class VisualScreen extends React.Component{

    constructor(props) {
        super(props)

    
    }
    componentDidMount() {
    }
  
    componentWillUnmount() {
    }

    test() {

    }

  render() {

    let centerStyle = {
      textAlign: 'center'
    }

      return (

        <div style={centerStyle}>
          <br></br>
            <StockSearch onClick = {this.props.onClick}></StockSearch>
            <br></br>
            <Stock game = {false} stopGame = {this.test}></Stock>
        </div>


      );
  }
}

