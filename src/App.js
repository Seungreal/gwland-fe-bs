import React, { useEffect, Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import {
  Portfolio,
  Blog,
  PostSingle,
  ServiceSingle,
  MemberCard,
  PortfolioSingle
} from "./components/pages";
import Home from './webapp/cmm/pages/Home'
import Survey from './webapp/svy/pages/Survey'
import Course from './webapp/crs/pages/Course'
import PlaceList from './webapp/pce/pages/PlaceList'
import PlaceDetail from './webapp/pce/pages/PlaceDetail'
import Manage from './webapp/cmm/pages/Manage'
import { Header, Sidebar, Footer } from "./components/layouts";
import { ModalForm, ModalVideo, RequestForm } from "./components/ui";
import { Spinner } from "./components/elements";
import { useCustomState } from "./state/state";

export default () => {
  const [state, actions] = useCustomState();

  useEffect(() => {
    actions.fetch();
  }, [actions]);

  let app = state.error ? <p>Can't load page</p> : <Spinner fluid />;

  if (state.data) {
    app = (
        <Fragment>
          <Sidebar data={state.data.menu} />
          <ModalForm />
          <ModalVideo />
          <RequestForm />
          <Header data={state.data.menu} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/survey" exact component={Survey} />
            <Route path="/course" exact component={Course} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/place/list" exact>
              <PlaceList
                sidebar="left"
                layout="list"
                title="Blog list left sidebar"
              />
            </Route>
            <Route path="/blog/:post_id" exact component={PlaceDetail} />
            <Route path="/manage" exact component={Manage} />
            
            
            
            <Route path="/blog/:post_id" exact component={PostSingle} />
            <Route
              path="/services/:service_id"
              exact
              component={ServiceSingle}
            />
            <Route path="/team/:member_id" exact component={MemberCard} />
            <Route
              path="/portfolio/:project_id"
              exact
              component={PortfolioSingle}
            />

            <Route path="/blog/cats/:category" exact>
              <Blog sidebar="left" layout="grid" />
            </Route>

            <Route path="/blog/user/:author" exact>
              <Blog sidebar="left" layout="grid" />
            </Route>

            <Route path="/blog/date/:posting_date" exact>
              <Blog sidebar="left" layout="grid" />
            </Route>

            <Route path="/blog/search/:query" exact>
              <Blog sidebar="left" layout="grid" />
            </Route>
          </Switch>
          <Footer />
        </Fragment>
    );
  }

  return <Fragment>{app}</Fragment>;
};
