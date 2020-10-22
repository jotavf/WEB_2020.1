import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Main from "./components/Main";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Signout from "./components/Signout"; //tirar
import List from "./components/List";

import { connect } from "react-redux"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={"/"} className="navbar-brand">
              CRUD
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/"} className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/signin"} className="nav-link">
                    Signin
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/signout"} className="nav-link">
                    Logout
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/signup"} className="nav-link">
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/create"} className="nav-link">
                    Cadastrar Disciplinas
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/list"} className="nav-link">
                    Listar
                  </Link>
                </li>
              </ul>
            </div>
            {this.props.userLogado}
          </nav>

          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signout" component={Signout} />
            <Route exact path="/create" component={Create} />
            <Route exact path="/list" component={List} />
            <Route exact path="/edit/:id" component={Edit} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    userLogado: state.authReducer.user
  }
}

export default connect(
  mapStateToProps
  )(App)