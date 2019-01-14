import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Slider from './Slider'

export class Main extends Component {

  render() {
      return (
          <Row>
              <Col lg={5}>
                  <div className="MainRepair">
                      Качественный ремонт
                      <span>iphone за 35 минут и гарантия 1 год</span>
                  </div>
                  <div className="LightText">
                      Оставьте заявку на бесплатную диагностику без очереди, 
                      и получите защитное стеекло, стоимость 1000 рублей, 
                      с установкой в подарок!
                  </div>
                  <button className="MainCallButton">
                      Отправить заявку!
                  </button>
              </Col>
              <Col lg={6} lgoffset={1}>
                  <Slider/>
              </Col>
          </Row>
    );
  }
}

