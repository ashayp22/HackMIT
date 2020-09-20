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


    //calculate 52 week high/low

    var values = this.props.open;
    var min = 1000000000000;
    var max = 0;

    for(var i = 0; i < values.length - 30; i++) {
      if(values[i] < min) {
        min = values[i]
      }

      if(values[i] > max) {
        max = values[i]
      }
    }


    return (


        <div>
            
              {/* <p data-tip data-for = "price">Price: 15 <ReactTooltip id="price" place="top" effect="solid">
                    The price of the stock
                </ReactTooltip></p>
              <p data-tip data-for = "dividends">Dividend: 50 <ReactTooltip id="dividends" place="top" effect="solid">
                  A distribution of profits from a corporation to its stockholders
                </ReactTooltip></p>
              <p data-tip data-for = "volume">Volume: 10 <ReactTooltip id="volume" place="top" effect="solid">
                  A number of shares of a stock traded during a given period of time.
                </ReactTooltip></p>
              <p data-tip data-for = "earnings">Earnings: 50 <ReactTooltip id="earnings" place="top" effect="solid">
                  The profits of a company in a given quarter or fiscal year
                </ReactTooltip></p> */}
          
          <p style = {{fontWeight: 'bold', textDecoration: 'underline', fontStyle: 'italic'}} data-tip data-for = "high">
            52 Week High
          <ReactTooltip id="high" place="top" effect="solid">
            The highest and lowest share price that a stock has traded at during a passing year.
          </ReactTooltip>

          </p>
          <XYPlot width={this.props.width} height={50}>

            <XAxis
                labelFormat={v => `Value is ${v}`}
                labelValues={[2]}
                tickValues={[min, values[values.length - 30], max]}
                style={axisStyle}
                // ticks= {color= "#ff0000"}
            />

            <MarkSeries
            opacity={1}
            color="000"
            data={[
                {x: min, y: 0},
                {x: values[values.length - 30], y: 0},
                {x: max, y: 0},
            ]}
            />

        </XYPlot>
        
      </div>
    );
  }

}
