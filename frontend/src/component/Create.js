import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            location: '',
            quantity: ''
        };
    }

    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    };

    onSubmit = (e) => {
        e.preventDefault();

        const { name, location, quantity } = this.state;
        axios.post('/item/newitem', { name, location, quantity })
            .then((result) => {
            this.props.history.push("/")
        });
    };

    render() {
        const { name, location, quantity } = this.state;
        return (
            <div class="container">
            <div class="panel panel-default">
            <div class="panel-heading">
            <h3 class="panel-title">
                Add new Item
            </h3>
            </div>
            <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Home</Link></h4>
            <form onSubmit={this.onSubmit}>
                <div class="form-group">
                <label for="isbn">Name:</label>
                <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Name" />
                </div>
                <div class="form-group">
                <label for="title">Location:</label>
                <input type="text" class="form-control" name="location" value={location} onChange={this.onChange} placeholder="Location" />
                </div>
                <div class="form-group">
                <label for="author">Quantity:</label>
                <input type="text" class="form-control" name="quantity" value={quantity} onChange={this.onChange} placeholder="Quantity" />
                </div>
                <button type="submit" class="btn btn-success">Submit</button>
            </form>
            </div>
            </div>
            </div>
        );
    }
}

export default Create;
