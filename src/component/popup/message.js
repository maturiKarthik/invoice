/** @format */

import React, { useState } from "react";
import { Modal, Button } from "semantic-ui-react";

const Message = (props) => {
  const [dimmer, setDimmer] = useState(true);
  console.log(props.open);
  return (
    <>
      <Modal
        dimmer={dimmer}
        open={props.open}
        onClose={() => setDimmer(!dimmer)}
      >
        <Modal.Header>Use Google's location service?</Modal.Header>
        <Modal.Content>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </Modal.Content>
        <Modal.Actions>
          <Button negative>Disagree</Button>
          <Button positive>Agree</Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default Message;
