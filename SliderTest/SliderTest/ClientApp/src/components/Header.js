import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Link from './Link';

export class Header extends Component {

    render() {
        return (
            <React.Fragment>
            <Row>
                <Col lg={12}>
                    <nav>
                        <ul className="List">
                            <Link link="#" text="Звонок мастера"/>
                            <Link link="#" text="Наши цены" />
                            <Link link="#" text="Наши приемущества" />
                            <Link link="#" text="Схема работы" />
                            <Link link="#" text="Отзывы пользователей" />
                            <Link link="#" text="Примеры использования" />
                            <Link link="#" text="Контакты" />
                        </ul>
                    </nav>
                </Col>
                </Row>
                </React.Fragment>
        );
    }
}
