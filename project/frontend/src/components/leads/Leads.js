import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import EditableTableRow from '../common/EditableTableRow';
import PropTypes from 'prop-types';
import { getLeads, deleteLead, getLead } from '../../actions/leads';

export class Leads extends Component {
    static propTypes = {
        leads: PropTypes.array.isRequired,
        getLeads: PropTypes.func.isRequired,
        deleteLead: PropTypes.func.isRequired,
        getLead: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getLeads();
    }

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
                            <EditableTableRow key={lead.id} this={this} data={lead} handlers={{ getLead: this.props.getLead, deleteLead: this.props.deleteLead }} />
                        ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    leads: state.leads.leads,
});

export default connect(mapStateToProps, { getLeads, deleteLead, getLead })(Leads);