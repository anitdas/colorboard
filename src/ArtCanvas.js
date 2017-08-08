import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import KeyboardMappings from './helpers/KeyboardMappings';

class ArtCanvas extends Component {
  constructor(props) {
    super(props);

    const squareLength = 5;

    this.KeyboardMappings = new KeyboardMappings;

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
    // if (keydownEvent.altKey || keydownEvent.ctrlKey || keydownEvent.shiftKey) {
    //   return null;
    // }
    // Delete??
    // SPACE??
    // const x= keydownEvent;
    // console.log(x);
    // debugger
    return keydownEvent.key;
  }

  colorFunc(key){
    // Colors taken from : http://www.toxel.com/wp-content/uploads/2013/02/colortypewriter11.jpg
    const colorMapKeyColumns = this.KeyboardMappings.colorMap;
    const tileColor = { backgroundColor: (colorMapKeyColumns[key] || 'white') };

    return tileColor;
  }

}

ArtCanvas.propTypes = {
  keyData: PropTypes.array.isRequired,
};

export default ArtCanvas;
