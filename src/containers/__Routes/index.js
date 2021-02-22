import React from 'react';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from '../_PrivateRoute';
import HomePageThree from "../HomePageThree";
import SportsThreePage from "../CategoryPage";
import ContactUsThreePage from "../ContactUsThreePage";
import NotFoundThreePage from "../NotFoundThreePage";
import PostOneHThreePage from "../PostOneHThreePage";
import LegalPage from '../LegalPage';

const Routes = () => {
    return (
        <Switch>
            <PrivateRoute
                exact
                home_style={3}
                parentClass="theme-4"
                path="/"
                component={HomePageThree}/>
            <PrivateRoute
                exact
                home_style={3}
                parentClass="theme-4 bg4"
                path="/category/:id"
                component={SportsThreePage}/>
            <PrivateRoute
                exact
                home_style={3}
                parentClass="theme-4 bg4"
                path="/contact"
                component={ContactUsThreePage}/>
            <PrivateRoute
                exact
                home_style={3}
                parentClass="theme-4"
                path="/post/:id"
                component={PostOneHThreePage}/>        
            <PrivateRoute
                exact
                home_style={3}
                parentClass="theme-4"
                path="/legalInfo"
                component={LegalPage}/>        
            <Route exact component={NotFoundThreePage}/>
        </Switch>
    );
};
export default Routes