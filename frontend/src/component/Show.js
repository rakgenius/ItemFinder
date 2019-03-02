import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: {},
            isLoading: false
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData()  {
        this.setState({isLoading: true});

        console.log(this.props.match.params.id);
        axios.get('/item/'+this.props.match.params.id)
            .then(res => {
            this.setState({ item: res.data,
                isLoading: false});
            console.log(this.state.item);
        })
        .catch((error) => {
            if (error.response) {
                console.log(error);
                this.props.history.push("/error")
            } else if (error.request) {
                console.log(error.request);
                this.props.history.push("/error")
            } else {
                console.log(error.message);
                this.props.history.push("/error")
            }
            console.log(error);
        });
    }

    delete(id){
        console.log(id);
        axios.delete('/item/delete/'+id)
            .then((result) => {
                this.props.history.push("/")
            });
    }

    renderLoading() {
        return (<div class="loader"></div>);
    }

    render() {
        const { isLoading } = this.state.isLoading;

        if (isLoading) {
            return this.renderLoading();
        } else {
            return (
                <div class="container">
                <div class="panel panel-default">
                <div class="panel-heading">
                <h3 class="panel-title">
                Item Details
                </h3>
                </div>
                <div class="panel-body">

                <dl>
                    <dt>Name:</dt>
                    <dd>{this.state.item.name}</dd>
                    <dt>Location:</dt>
                    <dd>{this.state.item.location}</dd>
                    <dt>Quantity:</dt>
                    <dd>{this.state.item.quantity}</dd>
                </dl>
                </div>
                    <Link to={`/edit/${this.state.item.id}`} class="btn btn-success">Edit</Link>&nbsp;
                    <button onClick={this.delete.bind(this, this.state.item.id)} class="btn btn-danger">Delete</button>
                    <Link to={`/`} class="btn btn-success">Home</Link>&nbsp;
                </div>
                </div>
            );
        }
    }
}

export default Show;