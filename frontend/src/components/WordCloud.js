import React from 'react';
// import ReactDOM from 'react-dom';
// import Button from 'react-bootstrap/Button';
// import Stock from './Stock.js'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import StockSearch from './StockSearch.js'
import ReactWordcloud from 'react-wordcloud';
import { select } from "d3-selection";
import ReactTooltip from "react-tooltip";

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

export default class WordCloud extends React.Component{

    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
    }
  
    componentWillUnmount() {
    }
  render() {




    // const words = [
    //     {
    //         text: 'finance',
    //         value: 64,
    //     },
    //     {
    //         text: 'mistake',
    //         value: 11,
    //     },
    //     {
    //         text: 'thought',
    //         value: 16,
    //     },
    //     {
    //         text: 'bad',
    //         value: 15,
    //     },
    //     ]

    const words = []
    console.log(this.props.frequency)
    console.log(this.props.words)
    for(var i = 0; i < this.props.frequency.length; i++) {
      words.push({text: this.props.words[i], value: (this.props.frequency[i]) * 10})
    }

    console.log(words)

    var nowords = words.length == 0;

 
        const getCallback = callbackName => (word, event) => {
            const isActive = callbackName !== 'onWordMouseOut'
            const element = event.target
            const text = select(element)
            text
              .on('click', () => {
                if (isActive) {
                  window.open(`https://duckduckgo.com/?q=${word.text}`, '_blank')
                }
              })
              .transition()
              .attr('background', 'white')
              .attr('font-size', isActive ? '300%' : '100%')
              .attr('text-decoration', isActive ? 'underline' : 'none')
          }
          return (            
          

            <div>
              <p data-tip data-for ="high3" style = {{fontWeight: 'bold', textDecoration: 'underline', fontStyle: 'italic'}}>News Word Cloud
              <ReactTooltip wrapper="span" id="high3" place="left" effect="solid">
                A word cloud of the most popular words in news articles about the stock
              </ReactTooltip>
              
              </p>

              {!nowords
                ? <ReactWordcloud
                callbacks={{
                  onWordClick: getCallback('onWordClick'),
                  onWordMouseOut: getCallback('onWordMouseOut'),
                  onWordMouseOver: getCallback('onWordMouseOver'),
                }}
                words={words}
              />
                : <h4>This company isn't popular in the news!</h4>
              }
              
              
            </div>
          )
  }
}

