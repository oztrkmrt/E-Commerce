import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { user } = useSelector(state => state.client);
    const token = localStorage.getItem('token');
    const sessionUser = JSON.parse(sessionStorage.getItem('user'));
    const localUser = JSON.parse(localStorage.getItem('user'));
    const isAuthenticated = !!token && (!!user.name || !!sessionUser || !!localUser);

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{
                        pathname: "/login",
                        search: `?from=${props.location.pathname}${props.location.search}`
                    }} />
                )
            }
        />
    );
};

export default ProtectedRoute;