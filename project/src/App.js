import React, { Component } from 'react';
import Header from './components/Header';
import ShortLink from './components/ShortLink';
import TopFive from './components/TopFive';
import Footer from './components/Footer';
import Logo from './assets/logo-chaordic.png';
import Hits from './assets/urls';
import './App.css';

class App extends Component {
  render() {
    console.log(Hits)
    return (
      <div className="App">
        <Header path={Logo} />
        <div className="main">
          <ShortLink />
          <TopFive hits={Hits}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
