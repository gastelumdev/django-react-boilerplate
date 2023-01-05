import React, { useState } from 'react';

function EditableTableRow(props) {
    const [id, setId] = useState(props.data.id);
    const [name, setName] = useState(props.data.name);
    const [email, setEmail] = useState(props.data.email);
    const [message, setMessage] = useState(props.data.message);

    function handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    return (
        <tr>
            <td>{id}</td>
            <td><input value={name} name="name" onChange={handleChange} /></td>
            <td><input value={email} name="email" onChange={handleChange} /></td>
            <td><input value={message} name="message" onChange={handleChange} /></td>
            <td>
                <button
                    // onClick={props.handlers.getLead.bind(props.this, props.data)}
                    className="btn btn-primary btn-sm mr-1"
                >
                    Save
                </button>
                <button
                    onClick={props.handlers.deleteLead.bind(props.this, props.data.id)}
                    className="btn btn-danger btn-sm"
                >
                    X
                </button>
            </td>
        </tr>
    );
}

export default EditableTableRow;