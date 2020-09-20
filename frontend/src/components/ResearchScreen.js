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
      display: 'flex',
      flexDirection: 'column',
    }
    let bgStyle = {
        backgroundColor: 'white',
        borderRadius: '25px',
        padding: '2em',
    }
      return (
            <div style = {divStyle}>
                <div style = {centerStyle}>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                        <div class="flip-card-front"></div>
                        <div class="flip-card-back">
                        <h1 className = "header">Financial Literacy</h1>
                    <p style = {bgStyle}>Learn these ideas to improve your game
                        in the stock market!
                    </p>
                    <div>
                        <h5>
                            What are stocks, companies, and the stock market?
                        </h5>
                        <p style = {bgStyle}>Stocks are a type of security that gives stockholders a share of ownership in a company. Stocks also are called “equities.”</p>
                        <h5>
                            What does it mean to Buy or Short a stock?
                        </h5>
                        <p>Buying a stock is Shorting a stock investor is when an investor borrows a security and sells it on the open market, planning to buy it back later for less money.</p>
                        <h5>
                            Long Term vs Short Term Investing
                        </h5>
                        <ul style = {bgStyle}>
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
                    </div>
                </div>
            </div>
      );
  }
}

