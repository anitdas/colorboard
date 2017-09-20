import React, { Component } from 'react';
import _ from 'underscore';
import PropTypes from 'prop-types';
import KeyboardMappings from '../helpers/KeyboardMappings';

class Colorboard extends Component {
  constructor(props){
    super(props);

    this.state = {

    };

    this.KeyboardMappings = new KeyboardMappings();

    this.style = {
      container: {
        // border: '3px solid darkgray',
        backgroundColor: '#333333',

        position: 'fixed',
        bottom: '0px',
        width: '100%'
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
      <div style={this.style.container} key={'colorboard'}>
        { this.renderRows(this.KeyboardMappings.keyboardKeyRows) }
      </div>
    );
  }

  renderRows(rows){
    return _.map(rows, (row, rowIndex) => {
      return (
        <div style={this.style.keyRow} key={`hueboard-row-${rowIndex}`}>
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
        <div key={`${keyboardKey.id}`} style={this.style.colorKey.individual}>
          <div style={shiftedStyle} onClick={()=>this.props.keyTapFunction(keyboardKey.shifted)}>
            {keyboardKey.shifted}
          </div>
          <div style={regularStyle} onClick={()=>this.props.keyTapFunction(keyboardKey.regular)}>
            {keyboardKey.regular}
          </div>
        </div>
      );
    });
  }

}


Colorboard.propTypes = {
  keyTapFunction: PropTypes.func.isRequired,
};

export default Colorboard;
