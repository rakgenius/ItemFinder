import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './App.css';
import Search from './component/Search';
import Show from './component/Show';
import ShowItem from './component/ShowItem';
import Error from './component/Error';
import Create from './component/Create';
import Listall from './component/Listall';
import Edit from './component/Edit';

ReactDOM.render(
    <Router>
    <div>
        <Route exact path='/' component={App} />
        <Route path='/listall' component={Listall} />
        <Route path='/search' component={Search} />
        <Route path='/add' component={Create} />
        <Route path='/error' component={Error} />
        <Route path='/newitem' component={Create} />
        <Route path='/show/:id' component={Show} />
        <Route path='/showitem/:id' component={ShowItem} />
        <Route path='/edit/:id' component={Edit} />
    </div>
    </Router>,
    document.getElementById('root')
);
