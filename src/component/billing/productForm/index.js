/** @format */

import React, { useContext } from "react";
import { Grid, Label, Form } from "semantic-ui-react";
import { AppContext } from "../../AppContext";
import AddItemForm from "./AddItemForm";
import DisplayItem from "./DisplayItem";

const ProductForm = () => {
  const { productSideBar, showProductSideBar, dim, showDim } = useContext(
    AppContext
  );

  const addNewProduct = (event) => {
    showProductSideBar(!productSideBar);
    showDim(!dim);
  };

  return (
    <>
      <Form size="small">
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Label
                as={"a"}
                color="teal"
                onClick={(event) => addNewProduct(event)}
              >
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
