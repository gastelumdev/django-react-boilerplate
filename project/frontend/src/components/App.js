import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
import { UsersDashboard } from './users/UsersDashboard';
import Alerts from './layout/Alerts';
import Login from './accounts/login';
import Register from './accounts/register';
import { PrivateRoutes } from './common/PrivateRoutes';
import { Provider } from 'react-redux';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import store from '../store';

import { loadUser } from '../actions/auth';

const alertOptions = {
    timeout: 3000,
    position: 'top center'
}

class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                        <Fragment>
                            <Alerts />
                            <Routes>
                                <Route element={<PrivateRoutes />}>
                                    <Route exact path="/" element={<Dashboard />} />
                                    <Route exact path="/leads" element={<Dashboard />} />
                                    <Route exact path="/users" element={<UsersDashboard />} />
                                </Route>
                                <Route exact path="/register" element={<Register />} />
                                <Route exact path="/login" element={<Login />} />
                            </Routes>
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>
        )
    }
}

export default App;