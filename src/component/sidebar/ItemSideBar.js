/** @format */

import React, { useContext, useState } from "react";
import {
  Sidebar,
  Grid,
  Input,
  Segment,
  Menu,
  Header,
  Icon,
  Divider,
  Visibility,
  Button,
  Label,
  TextArea,
  Form,
} from "semantic-ui-react";
import { AppContext } from "../AppContext";
import { v4 as uuid_v4 } from "uuid";
import { productInitialState } from "../model/initialState";

const ProductSideBar = () => {
  const {
    PRODUCT_LIST_KEY,
    productList,
    setProductList,
    productSideBar,
    showProductSideBar,
    dim,
    showDim,
  } = useContext(AppContext);
  const [product, setProduct] = useState(productInitialState);

  const toggleSideBar = () => {
    showProductSideBar(!productSideBar);
    showDim(!dim);
  };

  const handleOnchange = (event) => {
    let key = event.target.name;
    let value = event.target.value;
    product[key] = value;
    setProduct({ ...product });
  };

  const addItem = (event) => {
    console.log("Enterd here");
    const productListObj = {
      key: uuid_v4(),
      value: JSON.stringify(product),
      text: product["itemName"],
    };
    localStorage.setItem(
      PRODUCT_LIST_KEY,
      JSON.stringify([...productList, productListObj])
    );
    setProductList([...productList, productListObj]);
    showProductSideBar(!productSideBar);
    showDim(!dim);
  };

  return (
    <>
      {" "}
      <Sidebar
        as={Menu}
        animation="overlay"
        visible={productSideBar}
        width="very wide"
        direction="right"
        vertical
      >
        <Visibility>
          <Segment basic>
            <Form>
              <Grid padded="horizontally">
                <Grid.Row columns={"equal"}>
                  <Grid.Column>
                    <Header as={"h1"} size={"small"}>
                      Add Item
                    </Header>
                  </Grid.Column>

                  <Grid.Column textAlign="right">
                    <Icon name="close" onClick={toggleSideBar} />
                  </Grid.Column>
                </Grid.Row>
                <Divider />

                <Grid.Row columns={1}>
                  <Grid.Column>
                    <Header as={"h3"} size="small">
                      {" "}
                      Basic Details
                    </Header>
                  </Grid.Column>
                </Grid.Row>
                <Divider />

                <Grid.Row columns={"equal"}>
                  <Grid.Column>
                    {" "}
                    <label>
                      {" "}
                      <i
                        aria-hidden="true"
                        className="asterisk icon mini  red"
                      />
                      Item Name :
                    </label>
                  </Grid.Column>
                  <Grid.Column>
                    <Form.Field>
                      <Input
                        type="text"
                        placeholder="Enter Item Name"
                        name="itemName"
                        value={product["itemName"]}
                        onChange={(event) => handleOnchange(event)}
                      />
                    </Form.Field>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={"equal"}>
                  <Grid.Column>
                    {" "}
                    <label>
                      <i
                        aria-hidden="true"
                        className="asterisk icon mini  red"
                      />
                      Selling Price :
                    </label>
                  </Grid.Column>
                  <Grid.Column>
                    <Form.Field>
                      <Input
                        icon="rupee sign"
                        iconPosition="left"
                        type="text"
                        placeholder="100"
                        name="price"
                        value={product["price"]}
                        onChange={(event) => handleOnchange(event)}
                      />
                    </Form.Field>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={1}>
                  <Grid.Column>
                    {" "}
                    <Header as={"h3"} size="small">
                      Additional Details{" "}
                      <Label size="tiny">OPTIONAL FIELDS</Label>
                    </Header>
                  </Grid.Column>
                </Grid.Row>
                <Divider />

                <Grid.Row columns={2}>
                  <Grid.Column>
                    <label>Barcode:</label>
                  </Grid.Column>
                  <Grid.Column>
                    <Form.Field>
                      {" "}
                      <Input
                        type="text"
                        placeholder="2273546838467"
                        name="barcode"
                        value={product["barcode"]}
                        onChange={(event) => handleOnchange(event)}
                      />
                    </Form.Field>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <label>Unit:</label>
                  </Grid.Column>
                  <Grid.Column>
                    <Form.Field>
                      {" "}
                      <Input
                        type="text"
                        placeholder="Kg ,m ,litres etc"
                        name="unit"
                        value={product["unit"]}
                        onChange={(event) => handleOnchange(event)}
                      />
                    </Form.Field>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={2}>
                  <Grid.Column>
                    <label>Purchase Price(with Tax):</label>
                  </Grid.Column>
                  <Grid.Column>
                    <Form.Field>
                      <Input
                        type="text"
                        placeholder="Enter Purchase Price inclusice Of Tax"
                        name="price"
                        value={product["price"]}
                      />
                    </Form.Field>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <label>Description:</label>
                  </Grid.Column>
                  <Grid.Column>
                    <Form.Field>
                      <TextArea
                        rows={2}
                        placeholder="Product description eg: 1Box[32 Pieces]"
                        name="description"
                        value={product["description"]}
                        onChange={(event) => handleOnchange(event)}
                      />
                    </Form.Field>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column>
                    <Button
                      primary
                      size={"tiny"}
                      onClick={(event) => addItem(event)}
                    >
                      Add Item
                    </Button>
                    <Button basic onClick={toggleSideBar} size={"tiny"}>
                      Cancel
                    </Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Form>
          </Segment>
        </Visibility>
      </Sidebar>
    </>
  );
};

export default ProductSideBar;
