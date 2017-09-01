import React, { Component } from 'react';
import '../styles/App.css';

import BaseLayout from '../components/BaseLayout.js';
import ParentComponent from '../components/Parent.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout></BaseLayout>
        <Header />
        <ParentComponent />
        <Footer />
      </div>
    );
  }
}

export default App;
