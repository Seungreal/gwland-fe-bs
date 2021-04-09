import React from "react";
import { Switch, Route } from "react-router-dom";

import {Home} from 'webapp/cmm/pages'
import {ManagePage} from 'webapp/mng'
import Sidebar from 'webapp/cmm/layouts/Sidebar/Sidebar'
import Header from 'webapp/cmm/layouts/Header/Header'
import {useCustomState} from 'state/state'
import AuthRoute from "webapp/cmm/lib/AuthRoute";
import PlacePage from "webapp/pce/pages/PlacePage";
import OAuth2RedirectHandler from "webapp/cmm/lib/OAuth2RedirectHandler";
import { useSelector } from "react-redux";
import { SurveyPage } from "webapp/svy";
import { CoursePage } from "webapp/crs";
import { LoginForm } from "webapp/usr";

export default () => {
  const state = useCustomState()[0]
  const currentRole = useSelector(state=>state.accountReducer.authorization)

  return <>
    <Sidebar data={state.data.menu}/>
    <Header data={state.data.menu}/>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/survey" component={SurveyPage} />
      <AuthRoute auth="USER" current={currentRole} path="/course" component={CoursePage}/>
      <Route path="/place" component={PlacePage}/>
      <AuthRoute auth="ADMIN" current={currentRole} path="/manage" component={ManagePage} />
      <Route path="/login" exact component={LoginForm}/>
      <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}/>
    </Switch>
  </>;
};
