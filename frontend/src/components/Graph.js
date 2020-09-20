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
  Line
  
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

    console.log("here")

    console.log(this.props.open)
    console.log(this.props.dates)
    console.log("here")

    this.state = {
      value: null,
      value2: null
    };
  }

  _forgetValue = () => {
    this.setState({
      value: null,
      value2: null
    });
  };

  _rememberValue = value => {
    this.setState({value: value, value2: null});
  };

  _rememberValue2 = value => {
    this.setState({value: null, value2: value});
  };

  render() {

    console.log("we in graph baby")
    console.log(this.props.open)
    console.log(this.props.dates)

    const value = this.state.value;
    const value2 = this.state.value2;

    var labels = this.props.dates;
    var vals = this.props.open;
    var financeData = []

    for(var i = 0; i < vals.length; i++) {
      financeData.push({x: i, y: vals[i]})
    }

    var volumeData = []
    var vals2 = this.props.volume;

    for(var i = 0; i < vals2.length; i+= 30) {
      volumeData.push({x: i, y: vals2[i]})
    }


    financeData = financeData.slice(0, financeData.length - 30)
    volumeData = volumeData.slice(0, volumeData.length - 1)
    labels = labels.slice(0, labels.length - 30)

    const ITEMS = [
      {title: 'Price', color: "#45aeb1"},
      {title: 'Volume', color: '#f93'},
      // {title: 'Dots', color: 'url(#circles)', strokeWidth: 9},
      // {title: 'Stripes', color: 'url(#stripes)'},
      // {title: 'Wide stripes', color: 'url(#stripes)', strokeWidth: 13},
      // {title: 'Normal', color: 'purple'},
      // {title: 'Wide', color: 'powderblue', strokeWidth: 6},
    ];

    return (

      <div>

      <XYPlot width={this.props.width} height={this.props.height}>
        <XAxis tickFormat={v => labels[v]} tickLabelAngle={-90} />
        <YAxis />
        <LineMarkSeries
          onValueMouseOver={this._rememberValue}
          onValueMouseOut={this._forgetValue}
          opacity={1}
          color="45aeb1"
          data={financeData}
          strokeWidth={2}
          // strokeDasharray={true ? [7, 3] : '7, 3'}
        />

 

        {value ? <Hint value={value} /> : null}
      </XYPlot>
      <br></br>
      <br></br>
      <XYPlot width={this.props.width} height={this.props.height}>
        <XAxis tickFormat={v => labels[v]} tickLabelAngle={-90} />
        <YAxis />
   
        <LineMarkSeries
          onValueMouseOver={this._rememberValue2}
          onValueMouseOut={this._forgetValue2}
          opacity={1}
          color="f93"
          data={volumeData}
          // strokeDasharray={true ? [7, 3] : '7, 3'}
        />


        {value2 ? <Hint value={value2} /> : null}
      </XYPlot>


      <div>
      <svg height={0} width={0}>
        <GradientDefs>
            <pattern id="stripes" width="4" height="4" patternUnits="userSpaceOnUse">
                <path d="M 0, 0 l 5, 5" stroke="#45aeb1" strokeLinecap="square" />
            </pattern>
            <pattern id="circles" width="3" height="3" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="0.1" fill="magenta" />
            </pattern>

        </GradientDefs>
      </svg>
    <DiscreteColorLegend orientation="horizontal" width={this.props.width} items={ITEMS} />
    </div>

    </div>
    );
  }

}
