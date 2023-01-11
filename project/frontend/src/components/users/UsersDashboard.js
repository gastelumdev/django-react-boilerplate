import React, { Component } from 'react';
import Header from '../layout/Header';
import Users from './Users';

export class UsersDashboard extends Component {
    render() {
        return (
            <Header>
                <Users />
            </Header>
        )
    }
}

export default UsersDashboard;