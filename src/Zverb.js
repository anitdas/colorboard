import React, { Component } from 'react';
import keydown from 'react-keydown';
import PropTypes from 'prop-types';
// import _ from 'underscore';
import './App.css';

// Inspired by https://vine.co/v/hPwl1bruuOi
class Zverb extends Component {
  constructor(props){
    super(props);


    this.state = {
      colorArray: [],
    };


    this.style = {
      containerStyle: {
        width: '600px',
        height: '800px',
        backgroundColor: 'black',
        boxShadow: '10px 10px 100px 0px rgba(0,0,0,0.75)',
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

    // const nextChar = this.props.keyData.pop();
    // console.log(nextChar);

    return (

      <div style={this.style.containerStyle} id='Zverb' className='Zverb'>
        { this.renderFrame('a', 1) }
      </div>
    );
  }

  renderFrame(content, index) {
    const zIndex = 5000 - index;

    const style = {
      backgroundColor: 'none',
      border: '50px solid dodgerblue',
      boxShadow: '10px 10px 100px 0px rgba(0,0,0,0.75)',
      width: '90%',
      height: '90%',
      zIndex: zIndex,
      color: 'dodgerblue',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };

    return (
      <div style={style}>
        { content }
      </div>
    );
  }

}

Zverb.propTypes = {
  keyData: PropTypes.array.isRequired,
}

export default keydown(Zverb) ;
