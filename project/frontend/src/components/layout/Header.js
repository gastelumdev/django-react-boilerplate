import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { MessageSquare, Bell, Settings } from 'react-feather';

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { collapsed: false };

        // This binding is necessary to make `this` work in the callback    
        this.handleClick = this.handleClick.bind(this);
    }

    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired,
    };

    handleClick() {
        this.setState(prevState => ({ collapsed: !prevState.collapsed }));
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const guestLinks = (
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Register
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
            </ul>
        );

        const authLinks = (
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <span className="navbar-text mr-3">
                    <strong>{user ? `Welcome ${user.username}` : ''}</strong>
                </span>
                <li className="nav-item">
                    <button onClick={this.props.logout} className="nav-link btn btn-info btn-sm text-light">Logout</button>
                </li>
            </ul>
        );

        return (
            <div className="wrapper">
                <nav id="sidebar" className={`sidebar js-sidebar ${this.state.collapsed ? 'collapsed' : ''}`}>
                    <div className="sidebar-content js-simplebar">
                        <a className="sidebar-brand" href="/#/login">
                            <span className="align-middle">Boiler</span>
                        </a>

                        <ul className="sidebar-nav">
                            <li className="sidebar-header">
                                Dashboard
                            </li>

                            <li className="sidebar-item active">
                                <a className="sidebar-link" href="/">
                                    <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Leads</span>
                                </a>
                            </li>

                            <li className="sidebar-item">
                                <a className="sidebar-link" href="/events">
                                    <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Events</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="main">
                    <nav className="navbar navbar-expand navbar-light navbar-bg">
                        <a className="sidebar-toggle js-sidebar-toggle" onClick={this.handleClick}>
                            <i className="hamburger align-self-center"></i>
                        </a>

                        <div className="navbar-collapse collapse">
                            <ul className="navbar-nav navbar-align">
                                <li className="nav-item dropdown">
                                    <a className="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-bs-toggle="dropdown">
                                        <div className="position-relative">
                                            <Bell />
                                            <span className="indicator">4</span>
                                        </div>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="alertsDropdown">
                                        <div className="dropdown-menu-header">
                                            4 New Notifications
                                        </div>
                                        <div className="list-group">
                                            <a href="#" className="list-group-item">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-2">
                                                        <i className="text-danger" data-feather="alert-circle"></i>
                                                    </div>
                                                    <div className="col-10">
                                                        <div className="text-dark">Update completed</div>
                                                        <div className="text-muted small mt-1">Restart server 12 to complete the update.</div>
                                                        <div className="text-muted small mt-1">30m ago</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="list-group-item">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-2">
                                                        <Bell />
                                                    </div>
                                                    <div className="col-10">
                                                        <div className="text-dark">Lorem ipsum</div>
                                                        <div className="text-muted small mt-1">Aliquam ex eros, imperdiet vulputate hendrerit et.</div>
                                                        <div className="text-muted small mt-1">2h ago</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="list-group-item">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-2">
                                                        <i className="text-primary" data-feather="home"></i>
                                                    </div>
                                                    <div className="col-10">
                                                        <div className="text-dark">Login from 192.186.1.8</div>
                                                        <div className="text-muted small mt-1">5h ago</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="list-group-item">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-2">
                                                        <i className="text-success" data-feather="user-plus"></i>
                                                    </div>
                                                    <div className="col-10">
                                                        <div className="text-dark">New connection</div>
                                                        <div className="text-muted small mt-1">Christina accepted your request.</div>
                                                        <div className="text-muted small mt-1">14h ago</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="dropdown-menu-footer">
                                            <a href="#" className="text-muted">Show all notifications</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-icon dropdown-toggle" href="#" id="messagesDropdown" data-bs-toggle="dropdown">
                                        <div className="position-relative">
                                            <MessageSquare />
                                        </div>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="messagesDropdown">
                                        <div className="dropdown-menu-header">
                                            <div className="position-relative">
                                                4 New Messages
                                            </div>
                                        </div>
                                        <div className="list-group">
                                            <a href="#" className="list-group-item">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-2">
                                                        <img src="static/frontend/img/avatars/avatar-5.jpg/" className="avatar img-fluid rounded-circle" alt="Vanessa Tucker" />
                                                    </div>
                                                    <div className="col-10 ps-2">
                                                        <div className="text-dark">Vanessa Tucker</div>
                                                        <div className="text-muted small mt-1">Nam pretium turpis et arcu. Duis arcu tortor.</div>
                                                        <div className="text-muted small mt-1">15m ago</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="list-group-item">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-2">
                                                        <img src="static/frontend/img/avatars/avatar-2.jpg/" className="avatar img-fluid rounded-circle" alt="William Harris" />
                                                    </div>
                                                    <div className="col-10 ps-2">
                                                        <div className="text-dark">William Harris</div>
                                                        <div className="text-muted small mt-1">Curabitur ligula sapien euismod vitae.</div>
                                                        <div className="text-muted small mt-1">2h ago</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="list-group-item">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-2">
                                                        <img src="static/frontend/img/avatars/avatar-4.jpg/" className="avatar img-fluid rounded-circle" alt="Christina Mason" />
                                                    </div>
                                                    <div className="col-10 ps-2">
                                                        <div className="text-dark">Christina Mason</div>
                                                        <div className="text-muted small mt-1">Pellentesque auctor neque nec urna.</div>
                                                        <div className="text-muted small mt-1">4h ago</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="list-group-item">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-2">
                                                        <img src="static/frontend/img/avatars/avatar-3.jpg" className="avatar img-fluid rounded-circle" alt="Sharon Lessman" />
                                                    </div>
                                                    <div className="col-10 ps-2">
                                                        <div className="text-dark">Sharon Lessman</div>
                                                        <div className="text-muted small mt-1">Aenean tellus metus, bibendum sed, posuere ac, mattis non.</div>
                                                        <div className="text-muted small mt-1">5h ago</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="dropdown-menu-footer">
                                            <a href="#" className="text-muted">Show all messages</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
                                        <Settings />
                                    </a>

                                    <a className="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-bs-toggle="dropdown">
                                        <img src="static/frontend/img/avatars/avatar.jpg" className="avatar img-fluid rounded me-1" alt="Charles Hall" /> <span className="text-dark">{user ? `Welcome ${user.username}` : ''}</span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <a className="dropdown-item" href="pages-profile.html"><i className="align-middle me-1" data-feather="user"></i> Profile</a>
                                        <a className="dropdown-item" href="#"><i className="align-middle me-1" data-feather="pie-chart"></i> Analytics</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="index.html"><i className="align-middle me-1" data-feather="settings"></i> Settings & Privacy</a>
                                        <a className="dropdown-item" href="#"><i className="align-middle me-1" data-feather="help-circle"></i> Help Center</a>
                                        <div className="dropdown-divider"></div>
                                        <button onClick={this.props.logout} className="dropdown-item">Logout</button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <main className="content">
                        <div className="container-fluid p-0">
                            {this.props.children}
                        </div>
                    </main>
                </div>


            </div >

        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);