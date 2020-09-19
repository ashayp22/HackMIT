import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineSeries, 
  LineMarkSeries,
  MarkSeries,
  Hint,
  LineSeriesCanvas,
  GradientDefs,
  DiscreteColorLegend,
  
} from 'react-vis';


const MARGIN = {
  left: 10,
  right: 10,
  bottom: 80,
  top: 20
};


export default class Graph extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  _forgetValue = () => {
    this.setState({
      value: null
    });
  };

  _rememberValue = value => {
    this.setState({value});
  };

  render() {
    const value = this.state.value;

    var labels = ["11/01", "11/02", "11/03", "11/04", "11/05"]

    const ITEMS = [
      {title: 'Dashed', color: "#45aeb1", strokeStyle: "dashed"},
      {title: 'Dasharray', color: '#f93', strokeDasharray: "1 2 3 4 5 6 7"},
      {title: 'Dots', color: 'url(#circles)', strokeWidth: 9},
      {title: 'Stripes', color: 'url(#stripes)'},
      {title: 'Wide stripes', color: 'url(#stripes)', strokeWidth: 13},
      {title: 'Normal', color: 'purple'},
      {title: 'Wide', color: 'powderblue', strokeWidth: 6},
    ];

    return (

      <Router>

      <XYPlot width={this.props.width} height={this.props.height}>
        <XAxis tickFormat={v => labels[v]} tickLabelAngle={-90} />
        <YAxis />
        <LineMarkSeries
          onValueMouseOver={this._rememberValue}
          onValueMouseOut={this._forgetValue}
          opacity={1}
          color="45aeb1"
          data={[
            {x: 0, y: 10},
            {x: 1, y: 5},
            {x: 2, y: 3},
            {x: 3, y: 25},
            {x: 4, y: 15}
          ]}
          strokeDasharray={true ? [7, 3] : '7, 3'}
        />

        <LineMarkSeries
          onValueMouseOver={this._rememberValue}
          onValueMouseOut={this._forgetValue}
          opacity={1}
          color="f93"
          data={[
            {x: 0, y: 0},
            {x: 1, y: 15},
            {x: 2, y: 30},
            {x: 3, y: 7},
            {x: 4, y: 0}
          ]}
          strokeDasharray={true ? [7, 3] : '7, 3'}
        />


        {value ? <Hint value={value} /> : null}
      </XYPlot>
      <div>
      <svg height={0} width={0}>
        <GradientDefs>
            <pattern id="stripes" width="4" height="4" patternUnits="userSpaceOnUse">
                <path d="M 0, 0 l 5, 5" stroke="#45aeb1" strokeLinecap="square" />
            </pattern>
            <pattern id="circles" width="3" height="3" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="0.8" fill="magenta" />
            </pattern>

        </GradientDefs>
      </svg>
    <DiscreteColorLegend orientation="horizontal" width={this.props.width} items={ITEMS} />
    </div>

    </Router>
    );
  }

}
