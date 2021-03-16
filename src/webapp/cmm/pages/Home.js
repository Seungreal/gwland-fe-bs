import React, { Fragment } from "react";
import {
  Features,
  Features2,
  Subscribe,
  Services,
  Team,
  Services3,
  Contacts,
  Slider,
  Reviews,
  Facts,
} from "components/widgets";

import { useCustomState } from "webapp/cmm/state/state";

export default () => {
  const state = useCustomState()[0];

  return (
    <Fragment>
          <Slider data={state.data.posts} />
          
    </Fragment>
  );
};
