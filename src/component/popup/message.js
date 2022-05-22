/** @format */

import React, { useState } from "react";
import { Modal, Button } from "semantic-ui-react";
import PdfTemplate from "../pdfRender";

const Message = () => {
  const [dimmer, setDimmer] = useState(true);
  console.log("Message rendered");
  return (
    <>
      <Modal dimmer={dimmer} open={true} onClose={() => setDimmer(!dimmer)}>
        <Modal.Header>Use Google's location service?</Modal.Header>
        <Modal.Content>
          <PdfTemplate />
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
