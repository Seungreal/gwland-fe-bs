import React, { Fragment, useState } from "react";
import Header from 'webapp/cmm/widgets/Header/Header'
import SurveyForm from '../components/SurveyForm'

export default () => {


  return (
    <Fragment>
      <Header img="assets/placeholders/photo.jpg">About company</Header>
		  <SurveyForm/>
    </Fragment>
  );
};
