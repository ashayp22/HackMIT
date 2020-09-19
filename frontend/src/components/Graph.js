import React from 'react';


import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineSeries, 
  MarkSeries
} from 'react-vis';


const MARGIN = {
  left: 10,
  right: 10,
  bottom: 80,
  top: 20
};


export default function Example(props) {
  return (
    <XYPlot margin={MARGIN} width={500} height={500}>
      <XAxis tickFormat={v => `Value is ${v}`} tickLabelAngle={-90} />
      <YAxis />
      <MarkSeries
        data={[{x: 0, y: 0}, {x: 10, y: 400}]}
        opacity={0}
        opacityType="linear"
      />
      <LineSeries
        data={[
          {x: -1, y: 10},
          {x: 0, y: 5},
          {x: 1, y: 3},
          {x: 2, y: -5},
          {x: 3, y: 15}
        ]}
      />
    </XYPlot>
  );
}