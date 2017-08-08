import React, { Component } from 'react';
import _ from 'underscore';
import KeyboardMappings from '../helpers/KeyboardMappings';

class Colorboard extends Component {
  constructor(props){
    super(props);

    this.state = {

    };

    this.KeyboardMappings = new KeyboardMappings;

    this.style = {
      container: {
        border: '3px solid darkgray',
        backgroundColor: 'none',
        margin: '10px',
        position: 'fixed',
        bottom: '0px',
        width: '90%',
      },

      keyRow: {
        backgroundColor: 'none',
        display: 'flex',
        flexDirection: 'row nowrap',
        justifyContent: 'center',
        alignItems: 'space-between',
      },

      colorKey: {
        individual: {
          backgroundColor: 'none',
          flex: '1',
          color: 'white',
          padding: '1px',
        },

        shifted: {
          fontSize: '10px',
          padding: '5px',
        },

        regular: {
          fontSize: '12px',
          padding: '5px',

        },
      }
    };
  }

  render() {
    return (
      <div style={this.style.container}>
        { this.renderRows(this.KeyboardMappings.keyboardKeyRows) }
      </div>
    );
  }

  renderRows(rows){
    return _.map(rows, (row) => {
      return (
        <div style={this.style.keyRow}>
          { this.renderRowKeys(row) }
        </div>
      );
    });
  }

  renderRowKeys(row){
    return _.map(row, (keyboardKey) => {
      const shiftedColor = this.KeyboardMappings.colorMap[keyboardKey.shifted];
      const regularColor = this.KeyboardMappings.colorMap[keyboardKey.regular];
      const shiftedStyle = _.extend({'backgroundColor': shiftedColor}, this.style.colorKey.shifted);
      const regularStyle = _.extend({'backgroundColor': regularColor}, this.style.colorKey.regular);

      return (
        <div style={this.style.colorKey.individual}>
          <div>
          </div>
          <div style={shiftedStyle}>
            {keyboardKey.shifted}
          </div>
          <div style={regularStyle}>
            {keyboardKey.regular}
          </div>
        </div>
      );
    });
  }

}

export default Colorboard;
