import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import './App.css';

import Create from './components/Create'
import Edit from './components/Edit'
import Home from './components/Home'
import List from './components/List'

export default class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light-bg-light">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={'/'} className="navbar-brand">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/create'} className="navbar-brand">Create</Link>
              </li>
              <li className="nav-item">
                <Link to={'/list'} className="navbar-brand">List</Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container">

          <h2>CRUD Ativ-3</h2>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/create" component={Create}/>
            <Route path="/edit/:id" component={Edit}/>
            <Route path="/list" component={List}/>
          </Switch>
        </div>
      </Router>
    )
  }
}