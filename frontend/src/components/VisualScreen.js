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
  render() {

    let divStyle = {
        width: "100%",
        height: (document.body.clientHeight) + "px",
        textAlign: 'center',
    }

    let centerStyle = {
      textAlign: 'center'
    }

      return (
        <Router>

            <div style={centerStyle}>
                {/* <Stock></Stock> */}

                <StockSearch></StockSearch>

                
            </div>


        </Router>
      );
  }
}

