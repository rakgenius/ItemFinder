import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Listall extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoading: false
        };
    }

    componentDidMount() {
        this.setState({isLoading: true});
        axios.get('/item/listall')
            .then(res => {
                this.setState({ items: res.data });
                this.setState({isLoading: false});
                console.log(this.state.items);
        });
    }

    renderLoading() {
        return (<div class="loader"></div>);
    }

    render() {
        const isLoading = this.state.isLoading;

        if (isLoading) {
            return this.renderLoading();
        } else {
            return (
                < div class= "container" >
                < div class= "panel panel-default" >
                < div class= "panel-heading" >
                < h3 class= "panel-title" >
                Items List
                </h3>
                </div>
                < div class="panel-body">
                < h4><Link to="/"><span class="glyphicon glyphicon-plus-sign" aria-hidden = "true">
                </span>Back</Link> </h4>
                <table class="table table-stripe">
                <thead>
                <tr>
                    <th> Name </th>
                    <th> Location </th>
                    <th> Quantity </th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.items.map(c =>
                        <tr>
                            <td> <Link to = {`/show/${c.id}`}>{c.name} </Link></td>
                            <td > {c.location}</td>
                            <td>{c.quantity}</td>
                        </tr>
                     )
                 }
                </tbody>
                </table>
                </div>
                </div>
                </div>
             );
        }
    }
}

export default Listall;
