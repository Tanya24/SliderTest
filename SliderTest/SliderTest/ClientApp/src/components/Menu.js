import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class Adres extends Component {
    render() {
        return (
            <span>{this.props.adr}</span>
            )
    }
}

class TelNumber extends Component {
    render() {
        return (
            <span>{this.props.tel}</span>
        )
    }
}

class Calls extends Component {
    render() {
        return (
            <span>{this.props.tel}</span>
        )
    }
}

export class Menu extends Component {

    render() {
        return (
            <Row>
                <Col lg={3}>
                    <div className="Repair">
                        Ремонт айфонов в сервисном центре и на выезде
                    </div>
                </Col>
                <Col lg={3} lgoffset={1}>
                    <div className="WorkTime">
                        <span>
                            Пн-пт с 10 до 20Б сб, вс с 11 до18
                        </span>
                        <Adres adr="Ленинскаяб 301" />
                    </div>
                </Col>
                <Col lg={3}>
                    <div className="Calls"><span>Звонки принимаются 24 часа</span>
                        <TelNumber tel="8 (846) 922 55 44" />
                    </div>
                </Col>
                <Col lg={2}>
                    <button className="CallButton">Заказать звонок</button>
                </Col>
            </Row>
        );
    }
}
