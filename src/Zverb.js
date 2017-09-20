import React, { Component } from 'react';
import * as d3 from 'd3';
import keydown from 'react-keydown';
import PropTypes from 'prop-types';
// import _ from 'underscore';

import './App.css';

// Inspired by https://vine.co/v/hPwl1bruuOi
class Zverb extends Component {
  constructor(props){
    super(props);

    this.style = {
      containerStyle: {
        width: '800px',
        height: '800px',
        backgroundColor: 'black',
        overflow: 'hidden',
      },


    };
  }

  render() {
    // animate over time
    // d3 color cycling, or switch with \b?
    // text/state
    // push buffer for charaters?
    // css animations, respective delays
    // future: web gl
    // jitter
    // spacebar / tab / etc to reset char buffer, string
    // spacebar to jump color
    // x seconds until animation finds resting behavior, spacebar to jump


    const domainBound = 50;
    const numLastCharacters = -10;
    const length = this.props.colorString.length % domainBound;
    const content = this.props.colorString.slice(numLastCharacters);

    return (
      <div style={this.style.containerStyle} id='Zverb' className='Zverb'>
        { this.renderFrames(content, this.colorFunc(length), length) }
      </div>
    );
  }

  colorFunc(index) {
    const colors = ['red', 'green','blue','yellow','orange','purple'];
    const colorsDomain = colors.map((item,index) => index*10);
    const colorFuncOne = d3.scaleLinear().domain(colorsDomain).range(colors);
    return colorFuncOne(index);
  }

  renderFrames(content, color, length){
    const frames = [...Array(10).keys()].map((i) => this.renderFrame(content, i, color, length));

    const style = {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    };

    return (
      <div style={style}>
        { frames }
      </div>
    );
  }

  renderFrame(content, index, color, length) {
    const widthHeight = 100 - 10*index;
    const zIndex = 10 - index;
    const left = 0*index;
    const opacity = 1 - 0.1*index;
    const fontSize = 200 - 18*index;

    const topPaddingFunc = d3.scaleLinear().domain([0,100]).range([0,50]);
    const topPadding = topPaddingFunc(length % 100);

    const style = {
      position: 'absolute',
      margin: 'auto',
      padding: topPadding,
      backgroundColor: 'rgba(0,0,0,0)',
      border: `40px solid ${color}`,
      // boxShadow: '10px 10px 100px 0px rgba(0,0,0,0.75)',
      width: `${widthHeight}%`,
      height: `${widthHeight}%`,
      zIndex: zIndex,
      color: color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      // left: `${left}px`,
      opacity: opacity,
      fontSize: fontSize,
      whiteSpace: 'nowrap',
    };

    return (
      <div style={style} key={`frame-${index}`}>
        { content }
      </div>
    );
  }

}

Zverb.propTypes = {
  colorString: PropTypes.string.isRequired,
}

export default keydown(Zverb) ;
