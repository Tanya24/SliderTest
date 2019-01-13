import React, { Component } from 'react';

export default class Link extends Component {
    render() {
        return (
            <a className="Link" href={this.props.link}>{this.props.text}
            </a>
            )
    }
}
