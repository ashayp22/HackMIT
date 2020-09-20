import React from 'react';
// import ReactDOM from 'react-dom';
// import Button from 'react-bootstrap/Button';
// import Stock from './Stock.js'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import StockSearch from './StockSearch.js'
import ReactWordcloud from 'react-wordcloud';
import { select } from "d3-selection";

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

    const words = [
        {
            text: 'told',
            value: 64,
        },
        {
            text: 'mistake',
            value: 11,
        },
        {
            text: 'thought',
            value: 16,
        },
        {
            text: 'bad',
            value: 15,
        },
        ]
 
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
              <p style = {{fontWeight: 'bold', textDecoration: 'underline', fontStyle: 'italic'}}>News Word Cloud</p>
              <ReactWordcloud
                callbacks={{
                  onWordClick: getCallback('onWordClick'),
                  onWordMouseOut: getCallback('onWordMouseOut'),
                  onWordMouseOver: getCallback('onWordMouseOver'),
                }}
                words={words}
              />
            </div>
          )
  }
}

