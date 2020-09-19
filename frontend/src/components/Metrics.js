import React from 'react';
import ReactTooltip from "react-tooltip";
import {ListGroup} from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineSeries, 
  MarkSeries,
  Hint
} from 'react-vis';


const MARGIN = {
  left: 10,
  right: 10,
  bottom: 80,
  top: 20
};


export default class Metrics extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }



  render() {

    const axisStyle = {
        ticks: {
          fontSize: '14px',
          color: '#333'
        },
        title: {
          fontSize: '16px',
          color: '#333'
        }
    }


    return (


        <div>
            
              <p>Price: 15 <ReactTooltip id="price" place="top" effect="solid">
                    The price of the stock
                </ReactTooltip></p>
              <p>Dividend: 50 <ReactTooltip id="dividends" place="top" effect="solid">
                  A distribution of profits from a corporation to its stockholders
                </ReactTooltip></p>
              <p>Volume: 10 <ReactTooltip id="volume" place="top" effect="solid">
                  A number of shares of a stock traded during a given period of time.
                </ReactTooltip></p>
              <p>Earnings: 50 <ReactTooltip id="earnings" place="top" effect="solid">
                  The profits of a company in a given quarter or fiscal year
                </ReactTooltip></p>
          
          <p>52 Week High</p>
          <XYPlot width={this.props.width} height={50}>

            <XAxis
                labelFormat={v => `Value is ${v}`}
                labelValues={[2]}
                tickValues={[0, 15, 50]}
                style={axisStyle}
            />

            <MarkSeries
            opacity={1}
            color="000"
            data={[
                {x: 0, y: 0},
                {x: 15, y: 0},
                {x: 50, y: 0},
            ]}
            />

        </XYPlot>
        
      </div>
    );
  }

}
