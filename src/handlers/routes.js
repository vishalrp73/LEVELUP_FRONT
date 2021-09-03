import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {

    return (
        <Route {...rest}
        render = {() => {
            if (!user) {
                return children
            }

            if (user) {
                return (
                    <Redirect to = {{pathname: loggedInPath }} />
                )
            }
            return null
        }} />
    )
}

export function ProtectedRoute ({user, children, ...rest}) {


    return (
        <Route {...rest}
        render = {({ location }) => {
            
            if (user) {
                console.log(children)
                return children;
            }

            if (!user) {
                console.log(user)
                console.log(children)
                return (
                    <Redirect to = {{pathname: 'home', state: {from: location}}} />
                )
            }
            return null
        }} />
    )
}