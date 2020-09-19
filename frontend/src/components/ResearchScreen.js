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
      width: '50vw',
      height: '70vh',
      boxShadow: "-4px 4px 2px gray",

    }

      return (
            <div style = {divStyle}>
                <div style = {centerStyle}>
                    <h1>Financial Literacy</h1>
                    <p>Learn these ideas to improve your game
                        in the stock market!
                    </p>
                    <div>
                        <h6>
                            What are stocks, companies, and the stock market?
                        </h6>
                        <p>Stocks are a type of security that gives stockholders a share of ownership in a company. Stocks also are called “equities.”</p>
                        <h6>
                            What does it mean to Buy or Short a stock?
                        </h6>
                        <p></p>
                        <h6>
                            Factors to Look at when choosing a stock to buy
                        </h6>
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
                    <Button onClick = {() => this.props.onClick(0)} variant = "warning">Back</Button>
                </div>
            </div>
      );
  }
}

