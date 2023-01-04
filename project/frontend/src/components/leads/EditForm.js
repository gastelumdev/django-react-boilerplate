import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLead, editLead, getLead } from '../../actions/leads';
import Accordion from '../common/Accordion';

export class EditForm extends Component {
    state = {
        id: this.props.lead.id,
        name: this.props.lead.name,
        email: this.props.lead.email,
        message: this.props.lead.message
    }

    static propTypes = {
        addLead: PropTypes.func.isRequired,
        editLead: PropTypes.func.isRequired,
        getLead: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getLead();
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        const { id, name, email, message } = this.state;
        const lead = { id, name, email, message };
        this.props.editLead(lead);

        this.setState({
            name: '',
            email: '',
            message: '',
        });
    };

    render() {

        const { name, email, message } = this.state;

        return (
            <Accordion title="Edit Lead" show="show">
                <h2>Edit Lead</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            onChange={this.onChange}
                            value={name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            onChange={this.onChange}
                            value={email}
                        />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea
                            className="form-control"
                            type="text"
                            name="message"
                            onChange={this.onChange}
                            value={message}
                        />
                    </div>
                    <div className="form-group">
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
    edit: state.leads.edit
});

export default connect(mapStateToProps, { addLead, editLead, getLead })(EditForm);