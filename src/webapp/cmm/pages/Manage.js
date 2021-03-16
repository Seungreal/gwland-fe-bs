import React, { Fragment } from "react";
import { Contacts2 } from "components/widgets";
import { useCustomState } from "webapp/cmm/state/state";
import Header from 'webapp/cmm/widgets/Header/Header'

export default () => {
  const state = useCustomState()[0];

  return (
    <Fragment>
      <Header img="assets/placeholders/photo.jpg">Our contacts</Header>
      <Contacts2 />
    </Fragment>
  );
};
