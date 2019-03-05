import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: {}
        };
    }

    componentDidMount() {
        axios.get('/item/'+this.props.match.params.id)
            .then(res => {
                this.setState({ item: res.data });
            });
    }

    onChange = (e) => {
        const state = this.state.item;
        state[e.target.name] = e.target.value;
        this.setState({item:state});
    };

    onSubmit = (e) => {
        e.preventDefault();

        const { name, location, quantity } = this.state.item;

        axios.put('/item/edit/'+this.props.match.params.id, { name, location, quantity })
            .then((result) => {
                this.props.history.push("/show/"+this.props.match.params.id)
            });
    };

    render() {
        return (
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            EDIT Item
                        </h3>
                    </div>
                    <div class="panel-body">
                        <h4><Link to={`/show/${this.props.match.params.id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> ItemList</Link></h4>
                        <form onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <label for="name">Name:</label>
                                <input type="text" class="form-control" name="name" value={this.state.item.name} onChange={this.onChange} placeholder="Name" />
                            </div>
                            <div class="form-group">
                                <label for="title">Location:</label>
                                <input type="text" class="form-control" name="location" value={this.state.item.location} onChange={this.onChange} placeholder="Location" />
                            </div>
                            <div class="form-group">
                                <label for="author">Quantity:</label>
                                <input type="text" class="form-control" name="quantity" value={this.state.item.quantity} onChange={this.onChange} placeholder="Quantity" />
                            </div>
                            <button type="submit" class="btn btn-default">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Edit;
