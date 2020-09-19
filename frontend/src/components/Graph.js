import React from 'react';

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineSeries
} from 'react-vis';

export default function Graph ({
  xDomain = [-1, 3],
  yDomain = [-5, 15],
  xAxisOn0 = true,
  yAxisOn0 = true,
  verticalTickValues = [],
  horizontalTickValues = [0]
}) {
  return (
    <XYPlot width={300} height={300} {...{xDomain, yDomain}}>
      {!verticalTickValues || verticalTickValues.length ? (
        <VerticalGridLines tickValues={verticalTickValues} />
      ) : null}
      {!horizontalTickValues || horizontalTickValues.length ? (
        <HorizontalGridLines tickValues={horizontalTickValues} />
      ) : null}
      <XAxis on0={xAxisOn0} />
      <YAxis on0={yAxisOn0} />
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
