
import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import { useUser } from '../../context/UserContext'
export default function PrivateRoute({ children, ...rest}) {

    const auth = useUser();
    return (
        <div>PR
            <Route {...rest} render={({ location }) => auth.user.email ? (children) : (
                <Redirect to={{ pathname: '/login', state: { from: location }}} />
            ) } />
        </div>
    );
}
