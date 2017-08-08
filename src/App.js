import React, { Component } from 'react';
import TopNav from './topnav/TopNav';
import keydown from 'react-keydown';
import ArtCanvas from './ArtCanvas';
import Colorboard from './colorboard/Colorboard';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      colorArray: [],
    };

    this.style = {
      width: '100%',
      height: '100%',
      backgroundColor: '#333333',
    };
  }

  componentWillReceiveProps( {keydown} ) {

    if ( keydown.event ) {
      this.state.colorArray.push(keydown.event);
    }
  }

  render() {
    return (
      <div style={this.style} className='App'>
        <TopNav />
        <ArtCanvas keyData={this.state.colorArray} />
        <Colorboard />
      </div>
    );
  }
}

export default keydown(App) ;
