import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

const PrivateRoute = (props) => {
    const {component: Component, ...rest} = props;
    return (
        <div className={props.parentClass}>
            <Route
                {...rest}
                render={props => (
                    <Component {...props} />
                )}
            />

        </div>
    )
};
export default PrivateRoute;
