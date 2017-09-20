import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import KeyboardMappings from './helpers/KeyboardMappings';

class ArtCanvas extends Component {
  constructor(props) {
    super(props);

    const squareLength = 10;

    this.KeyboardMappings = new KeyboardMappings();

    this.style = {
      container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: '10px',
        overflow: 'scroll',
      },

      canvas: {
        width: squareLength*90,
        height: squareLength*60,
        padding: '10px',
        backgroundColor: 'white',
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

  renderCubes(){
    const cubes = []
    // strings to divs
    for (let i = 0; i < this.props.colorString.length; i++) {
      const char = this.props.colorString.charAt(i);
      const colorStyle = {backgroundColor: this.KeyboardMappings.colorFunc(char)};

      const cube = <div
        key={`colortile-${i}`}
        style={_.extend({},this.style.tile,colorStyle)}>
      </div>;

      cubes.push(cube);
    }

    return cubes;
  }
}

ArtCanvas.propTypes = {
  colorString: PropTypes.string.isRequired,
};

export default ArtCanvas;
