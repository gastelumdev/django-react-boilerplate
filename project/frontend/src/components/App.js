import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Routes, Redirect } from 'react-router-dom';
import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
import Alerts from './layout/Alerts';
import Login from './accounts/login';
import Register from './accounts/register';
import PrivateRoute from './common/PrivateRoute';
import { Provider } from 'react-redux';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import store from '../store';

const alertOptions = {
    timeout: 3000,
    position: 'top center'
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                        <Fragment>
                            <Header />
                            <Alerts />
                            <div className='container'>
                                <Routes>
                                    <Fragment>
                                        <Route exact path="/" element={<PrivateRoute exact path="/" component={Dashboard} />} />
                                        <Route exact path="/register" element={<Register />} />
                                        <Route exact path="/login" element={<Login />} />
                                    </Fragment>
                                </Routes>
                            </div>
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));