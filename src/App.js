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
    };

    this.style = {
      width: '100%',
      height: '100%',
      backgroundColor: '#333333',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };
  }

  componentWillReceiveProps( {keydown} ) {
    console.log("Anit");

    if ( keydown.event ) {
      debugger
      this.state.colorArray.push(keydown.event);
    }
  }

  render() {
    // { this.renderTopNav() }
    // { this.renderColorboard() }

    return (
      <div style={this.style} className='App'>


        { this.renderZverb() }
      </div>
    );
  }

  renderTopNav(){
    return <TopNav />
  }

  renderColorboard(){
    return (
      <div>
        <ArtCanvas keyData={this.state.colorArray} />
        <Colorboard />
      </div>
    );
  }

  renderZverb(){
    return <Zverb keyData={this.state.colorArray} />;
  }
}

export default keydown(App) ;
