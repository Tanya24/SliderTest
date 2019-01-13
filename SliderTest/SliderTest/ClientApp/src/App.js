import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Main';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Menu } from './components/Menu';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';


export default class App extends Component {
  displayName = App.name

  render() {
      return (
          <div className="App">
              <header className="HeaderWrapper">
              <Grid>
                  <Header />
              </Grid>
              </header>
              <div className="MenuWrapper">
                <Grid>
                    <Menu />
                </Grid>
              </div>
              <main className="MainWrapper">
                  <Grid>
                      <Main />
                  </Grid>
              </main>
          </div>
    );
  }
}

function SayFullName(props) {
    return (
        <div>
            <h1> My - {props.name}, My surname - {props.surname}</h1>
            <a href={props.link}>My link</a>
        </div>
        )
}
    