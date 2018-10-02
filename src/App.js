import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
	    <h1>Bloc Jams</h1>
        </header>
        <main>
	    <Route exact path="/" component={Landing} />
	    <Route path="/Library" component={Library} />
	    </main>
      </div>
    );
  }
}

export default App;