import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLead } from '../../actions/leads';
import Accordion from '../common/Accordion';

export class Form extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    }

    static propTypes = {
        addLead: PropTypes.func.isRequired
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = this.state;
        const lead = { name, email, message };
        this.props.addLead(lead);

        this.setState({
            name: '',
            email: '',
            message: ''
        });
    };

    render() {

        const { name, email, message } = this.state;

        return (
            <Accordion title="Add Lead" show={this.props.showForm ? 'show' : ''}>
                <h2>Add Lead</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            onChange={this.onChange}
                            value={name}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            onChange={this.onChange}
                            value={email}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Message</label>
                        <textarea
                            className="form-control"
                            type="text"
                            name="message"
                            onChange={this.onChange}
                            value={message}
                        />
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </Accordion>
        )
    }
}

const mapStateToProps = (state) => ({
    lead: state.leads.lead,
    edit: state.leads.edit,
    showForm: state.leads.showForm
});

export default connect(mapStateToProps, { addLead })(Form);