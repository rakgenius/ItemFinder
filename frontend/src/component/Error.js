import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Error extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div class="container">
            <div class="panel panel-default">
            <div class="panel-heading">
            <h3 class="panel-title">
            Unable to find the Item
        </h3>
        </div>
        <div class="panel-body">
            <h4><Link to="/">
            <span class="glyphicon glyphicon-plus-sign" aria-hidden="true">
            </span> Back</Link></h4>

        </div>
        </div>
        </div>
    );
    }
}

export default Error;
