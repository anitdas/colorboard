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
  }

  componentWillReceiveProps(nextProps) {


    if ( nextProps.keydown.event ) {

      this.setState({
        colorString: this.state.colorString + nextProps.keydown.event.key,
      });
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

  // renderTopNav(){
  //   return <TopNav />
  // }

  // renderColorboard(){
  //   // need to do the string/array conversion for the text
  //   return (
  //     <div>
  //       <ArtCanvas keyData={this.state.colorArray} />
  //       <Colorboard />
  //     </div>
  //   );
  // }

  renderZverb(){
    return <Zverb colorString={this.state.colorString} />;
  }
}

export default keydown(App);
