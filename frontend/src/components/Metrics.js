import React from 'react';

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

        <Router>
            <ListGroup variant="flush">
              <ListGroup.Item>Price: 15</ListGroup.Item>
              <ListGroup.Item>Dividend: 50</ListGroup.Item>
              <ListGroup.Item>Volume: 10</ListGroup.Item>
              <ListGroup.Item>Earnings: 50</ListGroup.Item>
          </ListGroup>
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
        
      </Router>
    );
  }

}
