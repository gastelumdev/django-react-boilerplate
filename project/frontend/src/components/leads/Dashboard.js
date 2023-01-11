import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../layout/Header';
import Form from './Form';
import EditForm from './EditForm';
import Leads from './Leads';
import { editLead } from '../../actions/leads';

export class Dashboard extends Component {

    render() {
        return (
            <Fragment>
                <Header page="leads">
                    {this.props.edit ? <EditForm /> : <Form />}
                    <Leads />
                </Header>
            </Fragment>
        )
    }

}

const mapStateToProps = (state) => ({
    lead: state.leads.lead,
    edit: state.leads.edit
});

export default connect(mapStateToProps, { editLead })(Dashboard);
