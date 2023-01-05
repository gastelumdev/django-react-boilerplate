import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import EditableTableRow from '../common/EditableTableRow';
import TableRow from '../common/TableRow';
import PropTypes from 'prop-types';
import { getLeads, deleteLead, getLead, editLead } from '../../actions/leads';

export class Leads extends Component {
    state = {
        id: '',
        name: '',
        email: '',
        message: '',
        lead: null,
        form: false
    }

    static propTypes = {
        leads: PropTypes.array.isRequired,
        getLeads: PropTypes.func.isRequired,
        deleteLead: PropTypes.func.isRequired,
        getLead: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getLeads();
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    showForm = (lead) => this.setState({
        id: lead.id,
        name: lead.name,
        email: lead.email,
        message: lead.message,
        form: true
    });

    hideForm = (lead) => this.setState({
        id: '',
        name: '',
        email: '',
        message: '',
        lead: null,
        form: false
    });

    save = () => {
        const { id, name, email, message } = this.state;
        const lead = { id, name, email, message };
        this.props.editLead(lead);

        this.setState({
            name: '',
            email: '',
            message: '',
            form: false
        });

        this.props.getLeads();
    };



    render() {
        return (
            <Fragment>
                <h2>Leads</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.leads.map((lead) => (
                            (this.state.form && this.state.id === lead.id) ?

                                <tr key={this.state.id}>
                                    <td>{this.state.id}</td>
                                    <td><input value={this.state.name} name="name" onChange={this.onChange} /></td>
                                    <td><input value={this.state.email} name="email" onChange={this.onChange} /></td>
                                    <td><input value={this.state.message} name="message" onChange={this.onChange} /></td>
                                    <td>
                                        <button
                                            onClick={this.save.bind(this)}
                                            className="btn btn-primary btn-sm mr-1"
                                        >
                                            Save
                                        </button>
                                        <button
                                            onClick={this.hideForm.bind(this, lead)}
                                            className="btn btn-danger btn-sm"
                                        >
                                            X
                                        </button>
                                    </td>
                                </tr>
                                :
                                <tr key={lead.id}>
                                    <td>{lead.id}</td>
                                    <td>{lead.name}</td>
                                    <td>{lead.email}</td>
                                    <td>{lead.message}</td>
                                    <td>
                                        <button
                                            onClick={this.showForm.bind(this, lead)}
                                            className="btn btn-primary btn-sm mr-1"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={this.props.deleteLead.bind(this, lead.id)}
                                            className="btn btn-danger btn-sm"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    leads: state.leads.leads,
    lead: state.leads.lead,
    edit: state.leads.edit,
    showForm: state.leads.showForm
});

export default connect(mapStateToProps, { getLeads, deleteLead, getLead, editLead })(Leads);