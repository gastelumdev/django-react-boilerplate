import React from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

export const PrivateRoutes = () => {
    const auth = useSelector(state => state.auth);
    if (auth.isLoading) {
        return <h2>Loading...</h2>
    }

    return (
        auth.isAuthenticated ? <Outlet /> : <Navigate to='/login' />
    )
}