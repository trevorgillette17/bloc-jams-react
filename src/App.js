import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
	    <h1>Bloc Jams</h1>
        </header>
	    <nav>
	    <Link to='/'>Home</Link>
	    <Link to='/Library'>Library</Link>
	    </nav>
        <main>
	    <Route exact path="/" component={Landing} />
	    <Route path="/Library" component={Library} />
	    <Route path="/Album/:slug" component={Album} />
	    </main>
      </div>
    );
  }
}

export default App;
