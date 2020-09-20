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
                    <div style = {{display: 'flex', flexDirection: 'row'}}>
                        <div class="flip-card">
                            <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <h1 className = "header">Kids / Teens</h1>
                            </div>
                            <div class="flip-card-back">
                        <p style = {bgStyle}>Learn these concepts to improve your game
                            in the stock market!
                        </p>
                        <div>
                        <div style = {bgStyle}>
                                <h5>
                                    What is investing?
                                </h5>
                                <p>An investment is something we put our money in to help it grow. 
                                    If we just keep our money in a piggy bank or drawer, it won't earn any money for us.
                                    Below are some common types of investments
                                </p>
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
                            <h5>
                                What is a company, and what is the stock market?
                            </h5>
                            <p style = {bgStyle}>A company forms when a group of people decide to come together open up some business. 
                                This could be a store, restaurant, or some service, such as an electrical company. The stock market is the 
                                place where people come together to buy and sell stocks. More information on what a stock is can be found down below</p>
                            <h5>
                                What does it mean to Buy or Short a stock?
                            </h5>
                            <p  style = {bgStyle}>Buying a stock is when you buy a share of a company. Shorting a stock investor is when an investor borrows a security and sells it on the open market, planning to buy it back later for less money.</p>
                            <div style = {bgStyle}>
                            <p>Factors that will help you decide what stock to buy</p>
                            <table>
                                <tr>
                                    <td>Opening Price</td>
                                    <td>The opening price is the price of a stock when the stock market opens.</td>
                                </tr>
                                <tr>
                                    <td>Closing Price</td>
                                    <td>The closing price is the price of a stcok right before the stock market closes.</td>
                                </tr>
                                <tr>
                                    <td>High</td>
                                    <td>High is the highest price of a stock in a day.</td>
                                </tr>
                                <tr>
                                    <td>Low</td>
                                    <td>Low is the lowest price of a stock in a day.</td>
                                </tr>
                                <tr>
                                    <td>Debt-to-Equity</td>
                                    <td>The debt-to-equity (D/E) found by dividing a company's total debts and loans by how much the company
                                        is worth. These numbers are available on the balance sheet of a company's financial statements. </td>
                                </tr>
                                <tr>
                                    <td>Price-Earnings Ratio</td>
                                    <td>The price-earnings ratio, also known as P/E ratio, P/E, or PER, is a ratio of the company's share price to a company's profits (how much company makes per year)per share. 
                                        The ratio is used for valuing companies and to find out whether they are overvalued or undervalued.</td>
                                </tr>
                                <tr>
                                    <td>Dividends</td>
                                    <td>The dividend is money given back to share holders when a company makes a profit. 
                                        When a corporation earns a profit, it is able to pay a proportion of the profit as a dividend to shareholders.</td>
                                </tr>
                                <tr>
                                    <td>Volume</td>
                                    <td>Volume is the number of shares of a stock that are sold, or traded, over a certain period of time (usually daily).</td>
                                </tr>
                                <tr>
                                    <td>Beta</td>
                                    <td>Beta is a measure of how much the stock moves up and down compared to the entire market.</td>
                                </tr>
                                <tr>
                                    <td>Relative Strength Index</td>
                                    <td>The relative strength index is a chart that graphs the strength of a stock using the closing price of a recent trading period.</td>
                                </tr>
                                <tr>
                                    <td>Moving Average</td>
                                    <td>The moving average (MA) is the average price of a stock over a period of time.</td>
                                </tr>
                                <tr>
                                    <td>News/Social Media</td>
                                    <td>The News and Social Media can affect the price of a the stock. When news or posts on a company are negative, 
                                        the stock price tends to go down. When news or posts on a company are positive, the stock price tends to go up.</td>
                                </tr>
                            </table>

                            </div>
                            </div>
                            </div>
                            </div>
                        </div>
                        <div class="flip-card">
                        <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <h1 className = "header">Adults</h1>
                        </div>
                        <div class="flip-card-back">
                    <p style = {bgStyle}>Learn these concepts to improve your game
                        in the stock market!
                    </p>
                    <div>
                        <div style = {bgStyle}>
                                <h5>
                                    What is investing?
                                </h5>
                                
                                <p>Investing is the act of allocating resources, usually money, with the expectation of generating an income or profit. 
                                    You can invest in endeavors, such as using money to start a business, or in assets, such as purchasing real estate in hopes of reselling it later at a higher price.
                                </p>
                                <table>
                                <tr>
                                        <td>Stock</td>
                                        <td> A buyer of a company's stock becomes a fractional owner of that company. 
                                            Owners of a company's stock are known as its shareholders, and can participate in its growth and success through appreciation in the stock price and regular dividends paid out of the company's profits.</td>
                                    </tr>
                                    <tr>
                                        <td>Bonds</td>
                                        <td>Bonds are debt obligations of entities such as governments, municipalities and corporations. 
                                            Buying a bond implies that you hold a share of an entity's debt, and are entitled to receive periodic interest payments and the return of the bond's face value when it matures.</td>
                                    </tr>
                                    <tr>
                                        <td>Funds</td>
                                        <td> Funds are pooled instruments managed by investment managers that enable investors to invest in stocks, bonds, preferred shares, commodities etc. 
                                            The two most common types of funds are mutual funds and exchange-traded funds or ETFs. Mutual funds do not trade on an exchange and are valued at the end of the trading day; ETFs trade on stock exchanges and like stocks, are valued constantly throughout the trading day. 
                                            Mutual funds and ETFs can either passively track indices such as the S&P 500 or the Dow Jones Industrial Average, or can be actively managed by fund managers.</td>
                                    </tr>
                                    <tr>
                                        <td>Trusts</td>
                                        <td>Trusts are another type of pooled investment, with Real Estate Investment Trusts (REITs) the most popular in this category. 
                                            REITs invest in commercial or residential properties and pay regular distributions to their investors from the rental income received from these properties. 
                                            REITs trade on stock exchanges and thus offer their investors the advantage of instant liquidity.</td>
                                    </tr>
                                    <tr>
                                        <td>Real Estate</td>
                                        <td>Real estate investing involves the purchase, ownership, management, rental and/or sale of real estate for profit. 
                                            Improvement of realty property as part of a real estate investment strategy is generally considered to be a sub-specialty of real estate investing called real estate development. 
                                            Real estate is an asset form with limited liquidity relative to other investments, it is also capital intensive (although capital may be gained through mortgage leverage) and is highly cash flow dependent. 
                                            If these factors are not well understood and managed by the investor, real estate becomes a risky investment.</td>
                                    </tr>
                                </table>
                            </div>
                            <h5>
                                What is a company, and what is the stock market?
                            </h5>
                            <p style = {bgStyle}>A company is a legal entity formed by a group of individuals to engage in and operate a business—commercial or industrial—enterprise. 
                                A company may be organized in various ways for tax and financial liability purposes depending on the corporate law of its jurisdiction. 
                                Stock markets are where individual and institutional investors come together to buy and sell shares in a public venue. 
                                Nowadays these exchanges exist as electronic marketplaces.</p>
                            <h5>
                                What does it mean to Buy or Short a stock?
                            </h5>
                            <p style = {bgStyle}>Buying a stock is when you buy a share of a company. Shorting a stock investor is when an investor borrows a security and sells it on the open market, planning to buy it back later for less money.</p>
                            <div style = {bgStyle}>
                            <p>Factors that will help you decide what stock to buy</p>
                            <table>
                                <tr>
                                    <td>Opening Price</td>
                                    <td>The opening price is the price at which a security first trades upon the opening of an exchange on any given trading day</td>
                                </tr>
                                <tr>
                                    <td>Closing Price</td>
                                    <td>The closing price is the last price at which the stock traded during a regular trading day.</td>
                                </tr>
                                <tr>
                                    <td>High</td>
                                    <td>High is the highest price at which a stock traded during the course of the trading day.</td>
                                </tr>
                                <tr>
                                    <td>Low</td>
                                    <td>Low is the lowest price at which a stock traded during the course of the trading day.</td>
                                </tr>
                                <tr>
                                    <td>Debt-to-Equity</td>
                                    <td>The debt-to-equity (D/E) ratio is calculated by dividing a company's total liabilities by its shareholder equity. 
                                        These numbers are available on the balance sheet of a company's financial statements. 
                                        The ratio is used to evaluate a company's financial leverage.</td>
                                </tr>
                                <tr>
                                    <td>Price-Earnings Ratio</td>
                                    <td>The price-earnings ratio, also known as P/E ratio, P/E, or PER, is the ratio of a company's share price to the company's earnings per share. 
                                        The ratio is used for valuing companies and to find out whether they are overvalued or undervalued.</td>
                                </tr>
                                <tr>
                                    <td>Dividends</td>
                                    <td>The dividend is a distribution of profits by a corporation to its shareholders. 
                                        When a corporation earns a profit or surplus, it is able to pay a proportion of the profit as a dividend to shareholders.</td>
                                </tr>
                                <tr>
                                    <td>Volume</td>
                                    <td>Volume refers to the number of shares traded in a given time period. A stock's volume refers to the number of shares that are sold, or traded, over a certain period of time (usually daily).</td>
                                </tr>
                                <tr>
                                    <td>Beta</td>
                                    <td>Beta is a measure of the volatility—or systematic risk—of a security or portfolio compared to the market as a whole.</td>
                                </tr>
                                <tr>
                                    <td>Relative Strength Index</td>
                                    <td>The relative strength index is a technical indicator used in the analysis of financial markets. It is intended to chart the current and historical strength or weakness of a stock or market based on the closing prices of a recent trading period. </td>
                                </tr>
                                <tr>
                                    <td>Moving Average</td>
                                    <td>The moving average (MA) is a simple technical analysis tool that smooths out price data by creating a constantly updated average price. 
                                        The average is taken over a specific period of time, like 10 days, 20 minutes, 30 weeks or any time period the trader chooses.</td>
                                </tr>
                                <tr>
                                    <td>News/Social Media</td>
                                    <td>The News and Social Media can affect the price of a the stock. When news or posts on a company are negative, 
                                        the stock price tends to go down. When news or posts on a company are positive, the stock price tends to go up.</td>
                                </tr>
                            </table>

                            </div>

                        </div>
                        </div>

                            </div>
                        </div>
                    <div>
                    </div>
                </div>
                <button className = "coolButton back" onClick = {() => this.props.onClick(0)} variant = "warning">Back</button>
            </div>
        </div>
      );
  }
}

