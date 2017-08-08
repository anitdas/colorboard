import React, { Component } from 'react';

class TopNav extends Component {
  render() {
    const style = {
      overall: {
        backgroundColor: '#666666',
        padding: '15px',
      },

      text: {
        color: '#FFFFFF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.85,
      },

      bits: {
        margin: '0px 15px',
      }

    };

    return (
      <div style={style.overall}>
        <div style={style.text}>
          <div style={style.bits}>W E L C O M E</div>
          <div style={style.bits}>TO</div>
          <div style={style.bits}>C O L O R T Y P E R</div>
        </div>
      </div>
    );
  }
}

export default TopNav;
