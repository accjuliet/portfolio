import React, { Component } from 'react';
import { ReactComponent as Logo } from './avatar.svg';
import './App.css';
import './App.sass';

class App extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Hello World</h1>
          <p className="subtitle">
            My first portfolio is coming!
          </p>
          <Logo />
        </div>
      </section>
    );
  }
}

export default App;