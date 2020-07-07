import React, { Component } from 'react';

class Film extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <li className="film">
                <a target="_blank " href={this.props.url}>{this.props.name}</a>
            </li>
        );
    }
}

export default Film;