import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

export class Login extends Component {
    state = {
        username: '',
        password: '',
    };

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        if (this.props.isAuthenticated) {
            return <Navigate to="/" />;
        }
        const { username, password } = this.state;
        return (
            // <div className="col-md-6 m-auto">
            //     <div className="card card-body mt-5">
            //         <h2 className="text-center">Login</h2>
            //         <form onSubmit={this.onSubmit}>
            //             <div className="form-group">
            //                 <label>Username</label>
            //                 <input
            //                     type="text"
            //                     className="form-control"
            //                     name="username"
            //                     onChange={this.onChange}
            //                     value={username}
            //                 />
            //             </div>

            //             <div className="form-group">
            //                 <label>Password</label>
            //                 <input
            //                     type="password"
            //                     className="form-control"
            //                     name="password"
            //                     onChange={this.onChange}
            //                     value={password}
            //                 />
            //             </div>

            //             <div className="form-group">
            //                 <button type="submit" className="btn btn-primary">
            //                     Login
            //                 </button>
            //             </div>
            //             <p>
            //                 Don't have an account? <Link to="/register">Register</Link>
            //             </p>
            //         </form>
            //     </div>
            // </div>
            <main className="d-flex w-100">
                <div className="container d-flex flex-column">
                    <div className="row vh-100">
                        <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                            <div className="d-table-cell align-middle">

                                <div className="text-center mt-4">
                                    <p className="lead">
                                        Sign in to your account to continue
                                    </p>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <div className="m-sm-4">
                                            <div className="text-center">
                                                <img src="static/frontend/img/icons/icon-48x48.png" alt="Charles Hall" className="img-fluid rounded-circle mb-4" width="48" height="48" />
                                            </div>
                                            <form onSubmit={this.onSubmit}>
                                                <div className="mb-3">
                                                    <label className="form-label">Username</label>
                                                    <input
                                                        className="form-control form-control-lg"
                                                        type="text"
                                                        name="username"
                                                        placeholder="Enter your username"
                                                        onChange={this.onChange}
                                                        value={username}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Password</label>
                                                    <input
                                                        className="form-control form-control-lg"
                                                        type="password"
                                                        name="password"
                                                        placeholder="Enter your password"
                                                        onChange={this.onChange}
                                                        value={password}
                                                    />
                                                </div>
                                                <div className="text-center mt-3">
                                                    {/* <a href="index.html" className="btn btn-lg btn-primary">Sign in</a> */}
                                                    <button type="submit" className="btn btn-lg btn-primary">Sign in</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
