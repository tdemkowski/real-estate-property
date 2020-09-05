import React from 'react';
import { Route, Redirect } from "react-router-dom";

interface IProps {
    auth: boolean;
    component: (props: any) => JSX.Element;
    path: string;
}

const GuardedRoute = ({auth, component: WrappedComponent, ...rest} : IProps) => (
    <Route {...rest} render={(props) => (
        auth === true
            ? <WrappedComponent {...props} />
            : <Redirect to='/' />
        )} />

)

export default GuardedRoute;