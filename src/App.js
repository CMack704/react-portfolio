import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Particles from 'react-particles-js';
import './App.css'
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className='App'>
      <Particles />
      <NavBar />
      <Header />
      <div className='main'>
      <Switch basename='/cmack704.github.io'>
        <Route exact path='/' component={Home} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/contact' component={Contact} />
      </Switch>
      </div>
      <Footer />

    </div>

  );
}

export default App;
