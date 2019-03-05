import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    search = (e) => {
        axios.get('/')
            .then((result) => {
            this.props.history.push("/search/")
        });
    };

    display = (e) => {
        axios.get('/')
           .then((result) => {
               this.props.history.push("/listall/")
        });
    };

    add = (e) => {
        axios.get('/')
            .then((result) => {
                this.props.history.push("/add")
        });
    };

    render() {
        console.log("coming inside the function render");
        return (
            <div class="container">
            <div class="panel panel-default">
            <div class="panel-heading">
            <h3 class="panel-title">
            Welcome to the Item Finder
            </h3>
            <br></br>
            <div class="panel-body">
                <button onClick={this.display.bind(this)} className="btn btn-success">Display all</button>
                <button onClick={this.search.bind(this)} className="btn btn-success">Search</button>
                <button onClick={this.add.bind(this)} className="btn btn-success">Add Item</button>
            </div>
            </div>
            </div>
            </div>
        );
    }

}

export default App;
