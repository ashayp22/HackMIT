import React from 'react';
import ReactDOM from 'react-dom';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  LabelSeries
} from 'react-vis';
const greenData = [{x: 'Happy', y: 10}, {x: 'B', y: 5}, {x: 'C', y: 15}];
const labelData = greenData.map((d, idx) => ({
    x: d.x,
    y: Math.max(greenData[idx].y)
  }));

export default class TwitterEmojiGraph extends React.Component{
    state = {
        resize: true,
    }
    
    render() {
        const {useCanvas} = this.state;
        const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
        return (
          <div>
            {/* <ShowcaseButton
              onClick={() => this.setState({useCanvas: !useCanvas})}
              buttonContent={content}
            /> */}
            <XYPlot xType="ordinal" width={this.props.width} height={this.props.height} xDistance={100}>
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              <BarSeries className="vertical-bar-series-example" data={greenData} />
              {/* <LabelSeries data={labelData} getLabel={d => d.x} /> */}
            </XYPlot>
          </div>
        );
      }
}            