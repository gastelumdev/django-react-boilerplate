import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUsers, editUser } from '../../actions/users';

export class Users extends Component {
    state = {
        id: '',
        username: '',
        email: '',
        is_staff: '',
        form: false
    }

    static propTypes = {
        users: PropTypes.array.isRequired,
        getUsers: PropTypes.func.isRequired,
        editUser: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getUsers();
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    showForm = (user) => this.setState({
        id: user.id,
        username: user.username,
        email: user.email,
        is_staff: user.is_staff,
        form: true
    });

    hideForm = (user) => this.setState({
        id: '',
        username: '',
        email: '',
        is_staff: '',
        form: false
    });

    save = () => {
        const { id, username, email, is_staff } = this.state;
        const user = { id, username, email, is_staff };
        this.props.editUser(user);

        this.setState({
            id: '',
            username: '',
            email: '',
            is_staff: '',
            form: false
        });

        this.props.getUsers();
    }

    render() {
        return (
            <Fragment>
                <div className="card flex-fill">
                    <div className="card-header">
                        <h5 className="card-title mb-0">Users</h5>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-hover my-0">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Admin</th>
                                    <th />
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.users.map((user) => (
                                    (this.state.form && this.state.id === user.id) ?

                                        <tr key={this.state.id}>
                                            <td>{this.state.id}</td>
                                            <td><input value={this.state.username} name="username" onChange={this.onChange} /></td>
                                            <td><input value={this.state.email} name="email" onChange={this.onChange} /></td>
                                            <td><input value={this.state.is_staff} name="is_staff" onChange={this.onChange} /></td>
                                            <td>
                                                <button
                                                    onClick={this.save.bind(this)}
                                                    className="btn btn-primary btn-sm me-2"
                                                >
                                                    Save
                                                </button>
                                                <button
                                                    onClick={this.hideForm.bind(this, user)}
                                                    className="btn btn-danger btn-sm"
                                                >
                                                    X
                                                </button>
                                            </td>
                                        </tr>
                                        :
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.is_staff ? 'Yes' : 'No'}</td>
                                            <td>
                                                <button
                                                    onClick={this.showForm.bind(this, user)}
                                                    className="btn btn-primary btn-sm me-2"
                                                >
                                                    Edit
                                                </button>
                                            </td>
                                        </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.users.users,
    user: state.users.user
});

export default connect(mapStateToProps, { getUsers, editUser })(Users);