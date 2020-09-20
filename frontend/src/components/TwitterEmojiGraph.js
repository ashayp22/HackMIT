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
import ReactTooltip from "react-tooltip";


export default class TwitterEmojiGraph extends React.Component{
    state = {
        resize: true,
    }
    

    render() {

      
    


      console.log(this.props.twitter)

      var tempData = [['anger', '😡', 0], ['fear', '😨', 0], ['joy', '😂', 0], ['sadness', '😢', 0], ['analytical', '🤓', 0], ['confident', '😎', 0], ['tentative', '😐', 0]]

      for (var key in this.props.twitter) {
        // check if the property/key is defined in the object itself, not in parent
        if (this.props.twitter.hasOwnProperty(key)) {           
            console.log(key, this.props.twitter[key]);
            for(var i = 0; i < tempData.length; i++) {
              if(tempData[i][0] == key) {
                tempData[i][2] = this.props.twitter[key];
              }
            }
        }
      }

      // const greenData = [{x: '😀', y: 20}, {x: '😴', y: 50}, {x: '🤪', y: 30}];
      const greenData = [];

      for(var i = 0; i < tempData.length; i++) {
        greenData.push({x: tempData[i][1], y: tempData[i][2]})
      }

      const labelData = greenData.map((d, idx) => ({
        x: d.x,
        y: Math.max(greenData[idx].y)
      }));

        const {useCanvas} = this.state;
        const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
        return (
          <div>
            {/* <ShowcaseButton
              onClick={() => this.setState({useCanvas: !useCanvas})}
              buttonContent={content}
            /> */}
            <p data-tip data-for = "high2" style = {{fontWeight: 'bold', textDecoration: 'underline', fontStyle: 'italic'}}>Twitter Sentiment
            
              <ReactTooltip id="high2" place="left" effect="solid">
                This is what people on Twitter are feeling about the stock
              </ReactTooltip>
            </p>


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