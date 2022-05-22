/** @format */

import React, { useState, useContext } from "react";
import { Grid, Container, Button, Dropdown } from "semantic-ui-react";
import CustomerForm from "./CustomerForm";
import ProductForm from "./productForm/index";
import { GstPercentage } from "../Helper";
import PdfTemplate from "../pdfRender";
import { AppContext } from "../AppContext";

const Billing = () => {
  const { pdfRenderInfo, dispatch } = useContext(AppContext);
  const [uiTest, setUiTest] = useState(false);
  //Gst Selection:
  const onGstSelected = (event, data) => {
    if (data.value === "") return;
    pdfRenderInfo["gst"] = data.value;
    dispatch({
      type: "updateItemInList",
      value: { ...pdfRenderInfo },
    });
  };

  const renderPdf = (event) => {
    const itemsInCart = pdfRenderInfo.itemLists.length;
    const companyName = pdfRenderInfo["customerDetail"];
    switch (true) {
      case itemsInCart <= 0 && companyName === undefined:
        console.log("Both are required");
        break;
      case itemsInCart <= 0:
        console.log("Atleast One Item should be in the cart");
        break;
      case companyName === undefined:
        console.log("Please select the Customer");
        break;
      default:
        setUiTest(!uiTest);
    }
  };

  return (
    <>
      <Container text>
        <Grid>
          <Grid.Row columns={1}>
            <Grid.Column>
              <CustomerForm />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column>
              <ProductForm />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={"equal"}>
            <Grid.Column>
              <label>
                (item/Qty):
                {pdfRenderInfo["items"] + "/" + pdfRenderInfo["itemsQuantity"]}
              </label>
            </Grid.Column>
            <Grid.Column>
              <label>Tax Amount : {pdfRenderInfo["taxableAmount"]}</label>
            </Grid.Column>
            <Grid.Column>
              <Dropdown
                options={GstPercentage}
                value={pdfRenderInfo["gst"]}
                placeholder="Enter GST %"
                onChange={(event, data) => onGstSelected(event, data)}
              />
            </Grid.Column>
            <Grid.Column>
              <label>GST Amount : {pdfRenderInfo["gstAmount"]}</label>
            </Grid.Column>
            <Grid.Column>
              <label>Total Amount : {pdfRenderInfo["totalAmount"]}</label>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column textAlign="center">
              <Button positive onClick={renderPdf}>
                Save & Print
              </Button>
            </Grid.Column>
          </Grid.Row>

          {uiTest ? <PdfTemplate /> : ""}
        </Grid>
      </Container>
    </>
  );
};

export default Billing;
