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
      alignItems: 'center'
    }
    let heading = {
        backgroundColor: '#FBCDC2',
        borderRadius: '25px',
        boxShadow: "-4px 4px 2px gray",
        textAlign: 'center'
    }
    let bgStyle = {
        backgroundColor: 'white',
        borderRadius: '25px',
        padding: '2em',
    }
      return (
            <div style = {divStyle}>
                <h1 style = {heading} className = "header">Financial Literacy</h1>
                <div style = {centerStyle}>
                    <div style = {{display: 'flex', flexDirection: 'row',}}>
                        <div class="flip-card">
                            <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <h1 className = "header">Kids</h1>
                            </div>
                            <div class="flip-card-back">
                        <p style = {bgStyle}>Learn these concepts to improve your game
                            in the stock market!
                        </p>
                        <div>
                            <h5>
                                What are stocks, companies, and the stock market?
                            </h5>
                            <p style = {bgStyle}>Stocks are a type of security that gives stockholders a share of ownership in a company. Stocks also are called "shares”, or "equities"</p>
                            <h5>
                                What does it mean to Buy or Short a stock?
                            </h5>
                            <p  style = {bgStyle}>Buying a stock is when you buy a share of a company. Shorting a stock investor is when an investor borrows a security and sells it on the open market, planning to buy it back later for less money.</p>
                            <h5>
                                What is investing?
                            </h5>
                            <p  style = {bgStyle}>An investment is something we put our money in to help it grow. 
                                If we just keep our money in a piggy bank or drawer, it won't earn any money for us.
                                Below are some common types of investments
                            </p>
                            <div style = {bgStyle}>
                                <table>
                                    <tr>
                                        <td>Savings Account</td>
                                        <td>Imagine that you give money to bank for safe keeping. At the end of each month, the bank pays us gives adds a little extra money to our total amount called interest for letting the banks borrow our money. 
                                        Overtime, the money you put in the bank will keep earning interest and grow higher and higher 
                                        Then it will earn interest on the interest, which makes it grow even more. We call this compounding.</td>
                                    </tr>
                                    <tr>
                                        <td>Bonds</td>
                                        <td>Just like a savings account, when we buy bonds, we can lend our money to a bank, but we can also lend it to company or government. When a company or the government issues a bond, we can buy those bonds,
                                            and they will also pay us interest to borrow our money. Bonds can give higher interest than savings accounts, but you have to leave your money in them for a lot longer until they "grow up" or mature. 
                                            When the time is up, you will get back your the money you put in initially plus the money earned from interest</td>
                                    </tr>
                                    <tr>
                                        <td>Stocks</td>
                                        <td>When we buy, or invest, in a stock, we actually buy a small part, or piece of a company. We hold a very small piece of the company. 
                                            Any company can put out stock for people to buy. For example, McDonalds has stocks.
                                            Companies will put out these stocks so that the company can make more money and grow bigger and better. 
                                            Stocks can be risky because their price is always going up and down. Be Careful with stocks!</td>
                                    </tr>
                                </table>
                            </div>
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
                            </div>
                            </div>
                        </div>
                        <div class="flip-card">
                            
                            <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <h1 className = "header">Teens</h1>
                            </div>
                            <div class="flip-card-back">
                        <p style = {bgStyle}>Learn these concepts to improve your game
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
                            <p>Buying a stock is when you buy a share of a company. Shorting a stock investor is when an investor borrows a security and sells it on the open market, planning to buy it back later for less money.</p>
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
                            </div>
                            </div>
                        </div>
                        <div class="flip-card">
                        <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <h1 className = "header">Older Adults</h1>
                        </div>
                        <div class="flip-card-back">
                    <p style = {bgStyle}>Learn these concepts to improve your game
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
                        <p>Buying a stock is when you buy a share of a company. Shorting a stock investor is when an investor borrows a security and sells it on the open market, planning to buy it back later for less money.</p>
                        <h5>
                            Long Term vs Short Term Investing
                        </h5>
                        <p>Longterm:
                        A long-term investment is an account on the asset side of a company's balance sheet that represents the company's investments, including stocks, bonds, real estate, and cash. 
                        Long-term investments are assets that a company intends to hold for more than a year. The long-term investment account differs largely from the short-term investment account in that short-term investments will most likely be sold, whereas the long-term investments will not be sold for years and, in some cases, may never be sold.
                        Being a long-term investor means that you are willing to accept a certain amount of risk in pursuit of potentially higher rewards and that you can afford to be patient for a longer period of time. It also suggests that you have enough capital available to afford to tie up a set amount for a long period of time.   
                        </p>
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
                        </div>
                        </div>
                    </div>
                    </div>
                    <div>
                        <button className = "coolButton back" onClick = {() => this.props.onClick(0)} variant = "warning">Back</button>
                    </div>
                </div>

            </div>
      );
  }
}

