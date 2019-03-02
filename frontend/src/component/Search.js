import React, { Component } from 'react';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: {}
        };
    }

    onChange = (e) => {
        const state = this.state.item;
        state[e.target.name] = e.target.value;
        this.setState({item:state});
    };

    onSubmit = (e) => {
        const { name, location } = this.state.item;
        if (name != null && location != null) {
            console.log("location and name is not null");
            this.props.history.push("/showitem/"+name);
        } else if (name != null) {
            console.log("location is null");
            this.props.history.push("/showitem/"+name);
        } else {
            console.log("name is null");
            this.props.history.push("/showitem/"+location);
        }

        this.props.history.push("/showitem/"+this.state.item.name);
    };

    render() {
        return (
            <div class="container">
            <div class="panel panel-default">
            <div class="panel-heading">
            <h3 class="panel-title">
            Search for an Item
            </h3>
            </div>
            <br></br>
            <div class="panel-body">
            <form onSubmit={this.onSubmit}>
                <div class="form-group">
                <label for="name">Enter item Name:</label>
                <input type="text" class="form-control" name="name" value={this.state.item.name} onChange={this.onChange} placeholder="Name" />
                </div>
                <br></br>
                <h3>OR</h3>
                <div className="form-group">
                    <label htmlFor="name">Enter item location:</label>
                    <input type="text" className="form-control" name="location" value={this.state.item.location}
                           onChange={this.onChange} placeholder="Name"/>
                </div>
                <button type="submit" class="btn btn-success">Search</button>
            </form>
            </div>
            </div>
            </div>
        );
    }
}

export default Search;
