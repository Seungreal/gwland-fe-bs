import React, { Fragment } from "react";
import { ListBlock, Services2, Pricing } from "components/widgets";
import { useCustomState } from "webapp/cmm/state/state";
import Header from 'webapp/cmm/widgets/Header/Header'

export default () => {
  const state = useCustomState()[0];

  return (
    <Fragment>
      <Header img="assets/placeholders/photo.jpg">Our services</Header>
      <h1>코스관리 페이지</h1>
    </Fragment>
  );
};
