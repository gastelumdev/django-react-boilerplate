import React, { Component } from 'react';
import Header from '../layout/Header';
import Users from './Users';

export class UsersDashboard extends Component {
    render() {
        return (
            <Header page='users'>
                <Users />
            </Header>
        )
    }
}

export default UsersDashboard;