import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';

class ArtCanvas extends Component {
  constructor(props) {
    super(props);

    const squareLength = 5;

    this.style = {
      container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
      },

      canvas: {
        padding: '10px',
        width: '800px',
        height: '600px',
        backgroundColor: 'white',
        margin: '20px',
        boxShadow: '10px 10px 100px 0px rgba(0,0,0,0.75)'
      },

      tile: {
        width: squareLength,
        height: squareLength,
        color: '#999999',
        display: 'inline-block',
        float: 'left',
      },
    };
  }

  render() {
    return (
      <div style={this.style.container}>
        <div style={this.style.canvas}>
          { this.renderCubes() }
        </div>
      </div>
    );
  }

  renderCubes() {
    const rows = this.props.keyData.map((keydownEvent, index) => {
      const processedKey = this.processKeyPress(keydownEvent);
      if (processedKey){
        const style=_.extend({}, this.style.tile, this.colorFunc(keydownEvent.key));
        return (
          <div key={`tile-${index}`} style={style} />
        );
      } else {
        return null;
      }
    });

    return rows;
  }

  processKeyPress(keydownEvent) {
    if (keydownEvent.altKey || keydownEvent.ctrlKey || keydownEvent.shiftKey) {
      return null;
    }
    // Delete??
    // SPACE??
    return keydownEvent.key;
  }

  colorFunc(key){
    // Colors taken from : http://www.toxel.com/wp-content/uploads/2013/02/colortypewriter11.jpg
    const colorMapKeyColumns = {
      ' ': 'white',
      '`': 'white',
      '~': 'white',

      '!': '#522e52',
      '1': '#8b365f',
      'Q': '#d65c59',
      'q': '#e25c50',
      'A': '#e84e4c',
      'a': '#e5524a',
      'Z': '#f396a9',
      'z': '#f0bec1',

      '@': '#5f354d',
      '2': '#a14264',
      'W': '#e64d2d',
      'w': '#dd6f4a',
      'S': '#eb592a',
      's': '#ed5c61',
      'X': '#e45e2b',
      'x': '#e8cbb9',

      '#': '#762d38',
      '3': '#b94343',
      'E': '#ec522e',
      'e': '#ed6830',
      'D': '#e5583d',
      'd': '#efc684',
      'C': '#f0632e',
      'c': '#f6c84e',

      '$': '#8d3833',
      '4': '#d7573c',
      'R': '#e95515',
      'r': '#ee7f2d',
      'F': '#efdf92',
      'f': '#eadc48',
      'V': '#f1f258',
      'v': '#f4ef93',

      '%': '#ad4932',
      '5': '#de5038',
      'T': '#eda944',
      't': '#f4d34e',
      'G': '#f1ee61',
      'g': '#e7e155',
      'B': '#f4ef71',
      'b': '#f1ecc6',

      '^': '#a44227',
      '6': '#d54c2a',
      'Y': '#d97e38',
      'y': '#e8914e',
      'H': '#cfdb5d',
      'h': '#e7e55e',
      'N': '#e9ee5e',
      'n': '#e6e992',

      '&': '#aa592e',
      '7': '#de8c40',
      'U': '#b7571b',
      'u': '#ab9f4d',
      'J': '#cde681',
      'j': '#dee450',
      'M': '#bdd9c2',
      'm': '#d2e371',

      '*': '#69593f',
      '8': '#8c5036',
      'I': '#9ea852',
      'i': '#bcca73',
      'K': '#42b87e',
      'k': '#63c475',
      '<': '#75c77f',
      ',': '#e2edcd',

      '(': '#586a90',
      '9': '#4c7ea1',
      'O': '#5474a3',
      'o': '#4d81a6',
      'L': '#6097cd',
      'l': '#69bdd9',
      '>': '#81d0ee',
      '.': '#c0dce0',

      ')': '#4c5286',
      '0': '#496394',
      'P': '#6376ae',
      'p': '#5a96c8',
      ':': '#59b3d8',
      ';': '#8dd1e8',
      '?': '#5f574c',
      '/': '#f1f1e9',

      '_': 'white',
      '-': 'white',
      '{': 'white',
      '[': 'white',
      '"': 'white',
      "'": 'white',

      '+': 'white',
      '=': 'white',
      '}': 'white',
      ']': 'white',

      '|': 'white',
      "\\": 'white',

    };

    const tileColor = { backgroundColor: (colorMapKeyColumns[key] || 'white') };

    return tileColor;
  }

}

ArtCanvas.propTypes = {
  keyData: PropTypes.array.isRequired,
};

export default ArtCanvas;
