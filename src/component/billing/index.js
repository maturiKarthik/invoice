/** @format */

import React, { useState, useReducer, useEffect } from "react";
import { Grid, Container, Button, Dropdown } from "semantic-ui-react";
import BillingContext from "./BillingContext";
import CustomerForm from "./CustomerForm";
import ProductForm from "./productForm/index";
import CurrentDate from "./CurrentDate";
import { CalulatePercentage, GstPercentage } from "./Helper";

const Billing = (props) => {
  let customerInfoData = undefined;
  // New state
  const initialCustomerState = {
    invoiceDate: CurrentDate,
    dueDate: CurrentDate,
    refText: "",
  };
  const initialBillingState = {
    gst: 0,
    gstAmount: 0,
    itemLists: [],
    taxableAmount: 0,
    totalAmount: 0,
    items: 0,
    itemsQuantity: 0,
  };
  const customerList = props.customerList;
  const productList = props.productsList;

  const [customer, setCustomer] = useState(initialCustomerState);
  const [billingInfo, setBillingInfo] = useState(initialBillingState);

  function reducer(state, action) {
    switch (action.type) {
      case "add":
        return [...state, action.value];

      case "remove":
        return state.filter((data, index) => index !== action.value);

      case "update":
        const element = state[action.itemIndex];
        element[action.productKey] = action.value;
        /**
         * Updated the onchange above then
         * caluclating the discount, netAmount,Total
         */
        const totalPrice = element["qty"] * element["price"];
        const discountPrice = (totalPrice / 100) * element["discount"];
        element["discountAmount"] = parseFloat(
          Math.round(discountPrice * 100) / 100
        );
        element["netAmount"] = parseFloat(totalPrice - discountPrice);
        state[action.itemIndex] = element;
        return [...state];

      default:
        return state;
    }
  }

  const [itemCart, dispatch] = useReducer(reducer, []);
  let totalItemsQty = 0;
  let totalAmount = 0;
  useEffect(() => {
    itemCart.forEach((element) => {
      totalItemsQty += element["qty"];
      totalAmount += element["netAmount"];
    });

    billingInfo["itemLists"] = itemCart;
    billingInfo["items"] = Object.keys(itemCart).length;
    billingInfo["itemsQuantity"] = totalItemsQty;
    billingInfo["taxableAmount"] = totalAmount;
    if (billingInfo["taxableAmount"] === 0) {
      billingInfo["gstAmount"] = 0;
      billingInfo["totalAmount"] = 0;
      billingInfo["gst"] = 0;
    }
    setBillingInfo({ ...billingInfo });
  }, [itemCart]);

  useEffect(() => {
    /**This effect is used to render changes of totalAmount */
  }, [billingInfo]);
  //Gst Selection:
  const onGstSelected = (event, data) => {
    if (data.value !== "") {
      billingInfo["gst"] = data.value;
      billingInfo["gstAmount"] = CalulatePercentage(
        data.value,
        billingInfo["taxableAmount"]
      );
      billingInfo["totalAmount"] =
        billingInfo["gstAmount"] + billingInfo["taxableAmount"];
      setBillingInfo({ ...billingInfo });
    }
  };

  console.log("Complete Info", { ...customer, ...billingInfo });
  const displaySideBar = () => {
    props.customerSideBarHandler();
  };

  /** P => Product */
  const displaySidePBar = () => {
    props.productSideBarHandler();
  };

  const FetchCustomerInfoHandler = (customerInfo) => {
    customerInfoData = customerInfo;
  };
  const FetchItemBillingInfoHandler = (billingData) => {
    props.fetchBillingInfoHandler({
      ...customerInfoData,
      ...billingData,
    });
  };

  return (
    <>
      <Container text>
        <Grid>
          <BillingContext.Provider
            value={{
              customer,
              setCustomer,
              billingInfo,
              setBillingInfo,
              customerList,
              productList,
              dispatch,
            }}
          >
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
                  {billingInfo["items"] + "/" + billingInfo["itemsQuantity"]}
                </label>
              </Grid.Column>
              <Grid.Column>
                <label>Tax Amount : {billingInfo["taxableAmount"]}</label>
              </Grid.Column>
              <Grid.Column>
                <Dropdown
                  options={GstPercentage}
                  value={billingInfo["gst"]}
                  placeholder="Enter GST %"
                  onChange={(event, data) => onGstSelected(event, data)}
                />
              </Grid.Column>
              <Grid.Column>
                <label>GST Amount : {billingInfo["gstAmount"]}</label>
              </Grid.Column>
              <Grid.Column>
                <label>Total Amount : {billingInfo["totalAmount"]}</label>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
              <Grid.Column textAlign="center">
                <Button positive>Save & Print</Button>
              </Grid.Column>
            </Grid.Row>
          </BillingContext.Provider>
        </Grid>
      </Container>
    </>
  );
};

export default Billing;
