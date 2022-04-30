/** @format */

import React from "react";
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

const ProductSideBar = (props) => {
  const toggleSideBar = () => {
    props.productSideBarHandler();
  };

  return (
    <>
      {" "}
      <Sidebar
        as={Menu}
        animation="overlay"
        visible={props.show}
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
                      <Input type="text" placeholder="Enter Item Name" />
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
                      <Input type="text" placeholder="2273546838467" />
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
                      />
                    </Form.Field>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column>
                    <Button primary size={"tiny"}>
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
