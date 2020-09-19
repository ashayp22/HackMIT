import React from 'react';


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


export default class Example extends React.Component {

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

    return (
      <XYPlot margin={MARGIN} width={500} height={500}>
        <XAxis tickFormat={v => labels[v]} tickLabelAngle={-90} />
        <YAxis />
        <MarkSeries
          onValueMouseOver={this._rememberValue}
          onValueMouseOut={this._forgetValue}
          data={[{x: 0, y: 10},
            {x: 1, y: 5},
            {x: 2, y: 3},
            {x: 3, y: 25},
            {x: 4, y: 15}]}
          // 
          // opacityType="linear"
        />
        <LineSeries
          onValueMouseOver={this._rememberValue}
          onValueMouseOut={this._forgetValue}
          opacity={1}
          data={[
            {x: 0, y: 10},
            {x: 1, y: 5},
            {x: 2, y: 3},
            {x: 3, y: 25},
            {x: 4, y: 15}
          ]}
        />
        {value ? <Hint value={value} /> : null}
      </XYPlot>
    );
  }

}
