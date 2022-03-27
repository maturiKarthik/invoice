import React, { useEffect, useState } from "react";
import { Grid, Container } from "semantic-ui-react";
import CustomerForm from "./CustomerForm";
import ProductForm from "./ProductForm";

const Billing = (props) => {
  const gstPercentage = [
    { key: "18%", value: 0.18, text: "18%" },
    { key: "12%", value: 0.12, text: "12%" },
  ];

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  const calculatePercentage = (precentage, value) => {
    return precentage * value;
  };

  const displaySideBar = () => {
    props.customerSideBarHandler();
  };

  {
    /** P => Product */
  }
  const displaySidePBar = () => {
    props.productSideBarHandler();
  };

  return (
    <>
      <Container text>
        <Grid>
          <Grid.Row columns={1}>
            <Grid.Column>
              <CustomerForm
                displaySideBar={displaySideBar}
                customerList={props.customerList}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column>
              <ProductForm displaySidePBar={displaySidePBar} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
};

export default Billing;
