import React, { Component } from 'react';
import './App.sass';
import './components/Breakpoints.sass'

import Header from './components/Header'
import BlockGray from './components/BlockGray'
import Highlights from './components/Highlights'
import Features from './components/Features'
import Cta from './components/Cta'
import Group3 from './components/Group3'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BlockGray />
        <Highlights />
        <Features />
        <Cta />
        <Group3 />
        <Footer />
      </div>
    );
  }
}

export default App;
