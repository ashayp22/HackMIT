import React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";



export default class StockSearch extends React.Component {

  constructor(props) {
    super(props);
    this.changeTicker = this.changeTicker.bind(this)
    this.stringDistance = this.stringDistance.bind(this)
    this.state = {
        ticker: ""
    };
  }

  stringDistance(a, b) {
    var l = 0;
  
    a = a.toLowerCase()
    b = b.toLowerCase()
  
    if(a.length > b.length) {
      for(var i = 0; i < a.length; i++) {
        if(a[i] != b[i]) {
          return l;
        }
  
        l++;
      }
    } else {
      for(var i = 0; i <b.length; i++) {
        if(a[i] != b[i]) {
          return l;
        }
        l++;
      }
    }
  
    return l;
  
  
  }

  changeTicker(e) {

    var CompanyToTicker = [
        ["Apple", "AAPL"],
        ["APPL", "AAPL"],
        ["Microsoft", "MSFT"],
        ["MSFT", "MSFT"],
        ["Tesla", "TSLA"],
        ["TSLA", "TSLA"]
    ]

    var chosen = ""
    var distance = 0;

    for(var i = 0; i < CompanyToTicker.length; i++) {
        var newDistance = this.stringDistance(e.target.value, CompanyToTicker[i][0]);

        if(newDistance > distance) {
            chosen = CompanyToTicker[i][1];
            distance = newDistance
        } else if (newDistance == distance) {
            if(CompanyToTicker[i][0].length < chosen.length) {
                chosen = CompanyToTicker[i][1];
                distance = newDistance;
            }
        }

    }

    console.log(chosen)
    console.log(distance)

    this.setState({ticker: chosen})
  }

  render() {

    let divStyle = {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        border: '5px solid',
        backgroundColor: '#FBCDC2',
        borderRadius: '25px',
        padding: '10px',
        width: '300px',
        height: '200px'
    }

    return (
        <div style = {divStyle}>

        <form>
            <div className="form-group">
                <label>Company Name</label>
                <input type="text" onChange={this.changeTicker} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                <p id="text" className="form-text text-muted">Ticker: {this.state.ticker}</p>
            </div>
            <p></p>
            <div className="form-group">
                <label>Date</label>
                <input type="date" className="form-control" id="date"></input>
            </div>
        </form>


        </div>
        
    );
  }

}
