import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
//import styled from 'styled-components';


export default class App extends Component {
  displayName = App.name

  render() {
      return (
          <div className="wrapper">
              <SayFullName name="Tanya" surname="Kochergina" link="test@test.ru" />
              <SayFullName name="Tanya2" surname="K2" link="test2@test.ru" />
              <SayFullName name="Tanya3" surname="K3" link="test3@test.ru" />
          </div>
    );
  }
}

function SayFullName(props) {
    return (
        <div>
            <h1> My name - {props.name}, My surname - {props.surname}</h1>
            <a href={props.link}>My link</a>
        </div>
        )
}
    