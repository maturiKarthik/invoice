/** @format */

import React from "react";
import { Grid, Label, Form } from "semantic-ui-react";
import AddItemForm from "./AddItemForm";
import DisplayItem from "./DisplayItem";

const ProductForm = () => {
  return (
    <>
      <Form size="small">
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Label as={"a"} color="teal">
                Add New Product
              </Label>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={"equal"}>
            <AddItemForm />
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column>
              <DisplayItem />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    </>
  );
};

export default ProductForm;
