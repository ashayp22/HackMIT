import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';


export default class ResearchScreen extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            
        }

    }
    componentDidMount() {
    }
  
    componentWillUnmount() {
    }
  render() {
    let divStyle = {
        width: "100%",
        height: (document.body.clientHeight) + "px",
    }

    let centerStyle = {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      border: '5px solid',
      backgroundColor: '#FBCDC2',
      borderRadius: '25px',
      padding: '10px',
      width: '1000px',
      height: '700px',
      boxShadow: "-4px 4px 2px gray",
        textAlign: 'center'
    }

      return (
            <div style = {divStyle}>
                <div style = {centerStyle}>
                    <h1 className = "header">Financial Literacy</h1>
                    <p>Learn these ideas to improve your game
                        in the stock market!
                    </p>
                    <div>
                        <h3>
                            What are stocks, companies, and the stock market?
                        </h3>
                        <p>Stocks are a type of security that gives stockholders a share of ownership in a company. Stocks also are called “equities.”</p>
                        <h3>
                            What does it mean to Buy or Short a stock?
                        </h3>
                        <p></p>
                        <h3>
                            Long Term vs Short Term Investing
                        </h3>
                        <ul>
                            <li>Stock Price Over Time
                                <ul>
                                    <li>Open</li>
                                    <li>Close</li>
                                    <li>High</li>
                                    <li>Low</li>
                                </ul>
                            </li>
                            <li>Debt-to-Equity</li>
                            <li>Price-Earnings Ratio</li>
                            <li>Dividends</li>
                            <li>Volume</li>
                            <li>Beta</li>
                            <li>News</li>
                            <li>Twitter Sentiment</li>
                            <li>Relative Strength Index</li>
                            <li>Moving Average</li>
                        </ul>

                    </div>
                    <button className = "coolButton back" onClick = {() => this.props.onClick(0)} variant = "warning">Back</button>
                </div>
            </div>
      );
  }
}

