import React, { Component } from 'react';
import TopNav from './topnav/TopNav';
import keydown from 'react-keydown';
import ArtCanvas from './ArtCanvas';
import Colorboard from './colorboard/Colorboard';
import Zverb from './Zverb';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      colorArray: [],
      colorString: ' ',
    };

    this.style = {
      width: '100%',
      height: '100%',
      backgroundColor: '#333333',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };

    this.skipKeys = ['Alt', 'Meta', 'Dead', 'Tab', 'CapsLock', 'Shift', 'Backspace', 'Delete', 'Enter', 'Shift', 'ArrowRight','ArrowLeft','ArrowUp','ArrowDown'];
  }

  componentWillReceiveProps(nextProps) {
    // Captures key-presses into a string
    // (which come to think of it might not work
    // for shift and stuff, but we'll figure that out)

    this.addKeyToColorString(nextProps.keydown.event);
  }

  addKeyToColorString(keyDownEvent) {
    // could muck with keydownevent for the other keyboard types
    if ( keyDownEvent ) {
      const key = keyDownEvent.key;

      const foundKey = this.skipKeys.indexOf(key) === -1;
      const addKey = foundKey ? key : '';

      this.setState({
        colorString: this.state.colorString + addKey,
      });
    }
  }

  render() {
    return (
      <div style={this.style} className='App'>
        { this.renderTopNav() }
        { this.renderColorboard() }
      </div>
    );
  }

  renderTopNav(){
    return <TopNav />
  }

  renderColorboard(){
    return (
      <div>
        <ArtCanvas colorString={this.state.colorString} />
        <Colorboard />
      </div>
    );
  }

  // Z-index Reverb
  renderZverb(){
    return <Zverb colorString={this.state.colorString} />;
  }
}

export default keydown(App);
