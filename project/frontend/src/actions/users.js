import axios from "axios";
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from "./auth";

import { GET_USERS, EDIT_USER } from './types';

export const getUsers = () => (dispatch, getState) => {
    axios.get('/api/auth/users/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_USERS,
                payload: res.data
            });
        })
        .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const editUser = (user) => (dispatch, getState) => {
    const { id, username, email, is_staff } = user;
    axios
        .put(`/api/users/${id}/`, { username, email, is_staff }, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: EDIT_USER,
                payload: res.data
            });
        })
        .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
}