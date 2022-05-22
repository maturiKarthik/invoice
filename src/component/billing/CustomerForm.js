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
import { AppContext } from "../AppContext";

const CustomerForm = () => {
  const {
    pdfRenderInfo,
    dispatch,
    customerList,
    customerSideBar,
    showCustomerSideBar,
    dim,
    showDim,
  } = useContext(AppContext);

  const OpenCustomerSideBar = (event) => {
    showCustomerSideBar(!customerSideBar);
    showDim(!dim);
  };

  const handleOnChange = (event) => {
    const keyName = event.target.name;
    const value = event.target.value;
    pdfRenderInfo[keyName] = value;
    dispatch({
      type: "insert",
      value: { ...pdfRenderInfo },
    });
  };

  const handleOnCustomerChange = (data) => {
    pdfRenderInfo["customerDetail"] = data;
    dispatch({ type: "insert", value: { ...pdfRenderInfo } });
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
                    if (data.value === "") handleOnCustomerChange({});
                    else {
                      const customerDetail = JSON.parse(data.value);
                      handleOnCustomerChange(customerDetail);
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
                  value={pdfRenderInfo["invoiceDate"]}
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
                  value={pdfRenderInfo["dueDate"]}
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
                  value={pdfRenderInfo["refText"]}
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
