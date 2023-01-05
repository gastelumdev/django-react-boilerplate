import React, { useEffect } from 'react';

function EditableTableRow(props) {
    return (
        <tr>
            <td>{props.data.id}</td>
            <td>{props.data.name}</td>
            <td>{props.data.email}</td>
            <td>{props.data.message}</td>
            <td>
                <button
                    onClick={props.handlers.getLead.bind(props.this, props.data.id)}
                    className="btn btn-primary btn-sm mr-1"
                >
                    Edit
                </button>
                <button
                    onClick={props.handlers.deleteLead.bind(props.this, props.data.id)}
                    className="btn btn-danger btn-sm"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
}

export default EditableTableRow;