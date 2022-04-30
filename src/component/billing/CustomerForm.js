/** @format */

import React, { useContext } from "react";
import {
  Dropdown,
  Form,
  Input,
  Label,
  TextArea,
  Grid,
} from "semantic-ui-react";
import BillingContext from "./BillingContext";

const CustomerForm = () => {
  const { customer, setCustomer, customerList } = useContext(BillingContext);

  const OpenCustomerSideBar = (event) => {
    console.log("Open Side bar  disabled");
  };

  const handleOnChange = (event) => {
    const keyName = event.target.name;
    const value = event.target.value;
    customer[keyName] = value;
    setCustomer({ ...customer });
  };

  return (
    <>
      <Form size="small">
        <Grid>
          <Grid.Row columns={"equal"}>
            <Grid.Column>
              <Label as={"a"} onClick={OpenCustomerSideBar}>
                Add New Customer
              </Label>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={"equal"}>
            <Grid.Column>
              <Form.Field>
                <label>Select Customer </label>
                <Dropdown
                  fluid
                  clearable
                  search
                  selection
                  options={customerList}
                  placeholder="Search Customer"
                  onChange={(event, data) => {
                    if (data.value !== "") {
                      //setCustomerDetail(JSON.parse(data.value));
                      const value = JSON.parse(data.value);
                      setCustomer({ ...value, ...customer });
                    }
                  }}
                />
              </Form.Field>
            </Grid.Column>

            <Grid.Column>
              <Form.Field>
                <label>Invoice Date</label>
                <Input
                  type="date"
                  name="invoiceDate"
                  value={customer["invoiceDate"]}
                  onChange={(event) => handleOnChange(event)}
                />
              </Form.Field>
            </Grid.Column>
            <Grid.Column>
              <Form.Field>
                <label>Due Date</label>
                <Input
                  type="date"
                  name="dueDate"
                  value={customer["dueDate"]}
                  onChange={(event) => handleOnChange(event)}
                />
              </Form.Field>
            </Grid.Column>
            <Grid.Column>
              <Form.Field>
                <label>Reference</label>
                <TextArea
                  rows={1}
                  placeholder="Any text ...etc"
                  name="refText"
                  value={customer["refText"]}
                  onChange={(event) => handleOnChange(event)}
                />
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    </>
  );
};

export default CustomerForm;
