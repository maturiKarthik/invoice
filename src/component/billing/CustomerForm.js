import React, { useState } from "react";
import {
  Container,
  Dropdown,
  Form,
  Input,
  Label,
  Segment,
  TextArea,
  Header,
} from "semantic-ui-react";

const CustomerForm = (props) => {
  const date = new Date();
  const today = String(
    date.getFullYear() +
      "-" +
      (date.getMonth() > 9
        ? date.getMonth() + 1
        : "0" + (date.getMonth() + 1)) +
      "-" +
      date.getDate()
  );
  const [invoiceDate, setInvoiceDate] = useState(today);

  console.log(today);

  const GetDate = (event) => {
    setInvoiceDate(event.target.value);
  };

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Field>
            <label>Select Customer</label>
            <Dropdown
              clearable
              multiple
              search
              selection
              options={props.customerList}
              placeholder="Search Customer"
            />
          </Form.Field>
          <Form.Field>
            <label>Invoice Date</label>
            <Input
              type="date"
              value={invoiceDate}
              onChange={(event) => GetDate(event)}
            />
          </Form.Field>
          <Form.Field>
            <label>Due Date</label>
            <Input type="date" />
          </Form.Field>
          <Form.Field control={TextArea} label="Reference"></Form.Field>
        </Form.Group>
      </Form>
      {/** 
      <Container text>
        <Segment raised placeholder size="small">
          <Form>
            <Form.Group widths={"equal"}>
              <Form.Field>
                <Form.Group inline>
                  <label>Select Customer</label>
                  <label
                    style={{
                      fontSize: "8.5px",
                      color: "#9acd32",
                      height: "15px",
                    }}
                    onClick={props.displaySideBar}
                  >
                    Add New Customer
                  </label>
                </Form.Group>

                <Dropdown
                  clearable
                  multiple
                  search
                  selection
                  options={props.customerList}
                  placeholder="Search Customer"
                />
              </Form.Field>
              <Form.Field>
                <label>Invoice Date </label>
                <Input type="date" size="small" />
              </Form.Field>
              <Form.Field>
                <label>Due Date </label>
                <Input type="date" size="small" />
              </Form.Field>
              <Form.Field>
                <label>Reference</label>
                <TextArea placeholder="Any text,PO Number etc." rows={2} />
              </Form.Field>
            </Form.Group>
          </Form>
        </Segment>
      </Container>
      */}
    </>
  );
};

export default CustomerForm;
