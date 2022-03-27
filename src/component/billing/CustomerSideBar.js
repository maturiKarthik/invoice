import React, { useEffect, useState } from "react";
import {
  Sidebar,
  Grid,
  Segment,
  Menu,
  Header,
  Icon,
  Checkbox,
  Divider,
  Visibility,
  Label,
  Button,
  Form,
  Dropdown,
} from "semantic-ui-react";
import stateOptions from "../model/StateOptions.js";

const CustomerSideBar = (props) => {
  const [err, setErr] = useState({ errName: false, errPhone: false });
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    gstin: "",
    company: "",
    baddress1: "",
    baddress2: "",
    bcity: "",
    bcstate: "",
    bpincode: "",
    shipping: false,
    saddress1: "",
    saddress2: "",
    scity: "",
    scstate: "",
    spincode: "",
  });

  //Shipping checkbox
  useEffect(() => {
    if (customer.shipping) {
      setCustomer({
        ...customer,
        saddress1: customer.baddress1,
        saddress2: customer.baddress2,
        scity: customer.bcity,
        scstate: customer.bcstate,
        spincode: customer.bpincode,
      });
    } else {
      setCustomer({
        ...customer,
        saddress1: "",
        saddress2: "",
        scity: "",
        scstate: "",
        spincode: "",
      });
    }
  }, [customer.shipping, err]);

  const toggleSideBar = () => {
    props.customerSideBarHandler(undefined);
  };

  const sendCustomerInfo = (event) => {
    switch (true) {
      case customer.name === "" && customer.phone === "":
        console.log("here");
        setErr({ errName: true, errPhone: true });
        break;
      case customer.name === "":
        setErr({ ...err, errName: true });
        break;
      case customer.phone === "":
        setErr({ ...err, errPhone: true });
        break;

      default:
        props.customerSideBarHandler(customer);
        setCustomer({
          name: "",
          phone: "",
          email: "",
          gstin: "",
          company: "",
          baddress1: "",
          baddress2: "",
          bcity: "",
          bcstate: "",
          bpincode: "",
          shipping: false,
          saddress1: "",
          saddress2: "",
          scity: "",
          scstate: "",
          spincode: "",
        });
        setErr({ errName: false, errPhone: false });
    }
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
                    <Header as={"h1"}>Customers</Header>
                  </Grid.Column>

                  <Grid.Column textAlign="right">
                    <Icon name="close" onClick={toggleSideBar} />
                  </Grid.Column>
                </Grid.Row>
                <Divider />
                <Grid.Row columns={"equal"}>
                  <Grid.Column>
                    <Header as={"h1"} size="medium">
                      Basic Details
                    </Header>
                  </Grid.Column>
                </Grid.Row>
                <Divider />
                <Grid.Row columns={"equal"}>
                  <Grid.Column>
                    <Form.Field>
                      <label>
                        <Icon.Group>
                          {" "}
                          <Icon name="asterisk" size="mini" color="red" />{" "}
                        </Icon.Group>
                        Name :
                      </label>
                    </Form.Field>
                  </Grid.Column>
                  <Grid.Column>
                    <Form.Field>
                      {" "}
                      <Form.Input
                        type="text"
                        placeholder="Contact Person"
                        value={customer.name}
                        onChange={(e) => {
                          setCustomer({
                            ...customer,
                            name: e.target.value,
                          });
                          setErr({ ...err, errName: false });
                        }}
                        error={err.errName}
                      />
                    </Form.Field>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={"equal"}>
                  <Grid.Column>
                    <Form.Field>
                      {" "}
                      <label>
                        <Icon.Group>
                          <Icon
                            name="asterisk"
                            size="mini"
                            corner="top left"
                            color="red"
                          />{" "}
                        </Icon.Group>
                        Phone :
                      </label>
                    </Form.Field>
                  </Grid.Column>
                  <Grid.Column>
                    <Form.Field>
                      {" "}
                      <Form.Input
                        value={customer.phone}
                        error={err.errPhone}
                        type="text"
                        placeholder="7672015243"
                        onChange={(e) => {
                          setCustomer({
                            ...customer,
                            phone: e.target.value,
                          });
                          setErr({ ...err, errPhone: false });
                        }}
                      />
                    </Form.Field>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={"equal"}>
                  <Grid.Column>
                    <Form.Field>
                      <label>
                        Email: <Label content="OPTIONAL" size="mini" />
                      </label>
                    </Form.Field>
                  </Grid.Column>
                  <Grid.Column>
                    <Form.Field>
                      <Form.Input
                        type="text"
                        placeholder="mail@gmail.com"
                        value={customer.email}
                        onChange={(event) =>
                          setCustomer({
                            ...customer,
                            email: event.target.value,
                          })
                        }
                      />
                    </Form.Field>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                  <Grid.Column>
                    {" "}
                    <Header as={"h3"}>
                      Company Details : <Label content="OPTIONAL" size="mini" />
                    </Header>
                  </Grid.Column>
                </Grid.Row>
                <Divider />
                <Grid.Row columns={"equal"}>
                  <Grid.Column>
                    <Form.Field>
                      {" "}
                      <label>GSTIN :</label>
                    </Form.Field>
                  </Grid.Column>
                  <Grid.Column>
                    <Form.Field>
                      <Form.Input
                        value={customer.gstin}
                        onChange={(event) =>
                          setCustomer({
                            ...customer,
                            gstin: event.target.value,
                          })
                        }
                        type="text"
                        placeholder="27AADCB2230M1ZT"
                      />
                    </Form.Field>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={"equal"}>
                  <Grid.Column>
                    <Form.Field>
                      {" "}
                      <label>Company :</label>
                    </Form.Field>
                  </Grid.Column>
                  <Grid.Column>
                    <Form.Field>
                      {" "}
                      <Form.Input
                        value={customer.company}
                        onChange={(event) =>
                          setCustomer({
                            ...customer,
                            company: event.target.value,
                          })
                        }
                        type="text"
                        placeholder="ABC Technology Private Limited"
                      />
                    </Form.Field>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                  <Grid.Column>
                    <Header as={"h3"}>Billing and Shipping Address</Header>{" "}
                  </Grid.Column>
                </Grid.Row>
                <Divider />
                <Grid.Row columns={"equal"}>
                  <Grid.Column>
                    <Form.Field>
                      {" "}
                      <label>Billing Address :</label>
                    </Form.Field>
                  </Grid.Column>
                  <Grid.Column>
                    <Grid>
                      <Grid.Row>
                        <Form.Field>
                          {" "}
                          <Form.Input
                            value={customer.baddress1}
                            onChange={(event) =>
                              setCustomer({
                                ...customer,
                                baddress1: event.target.value,
                              })
                            }
                            placeholder="AddressLine 1"
                          />
                        </Form.Field>
                      </Grid.Row>
                      <Grid.Row>
                        <Form.Field>
                          <Form.Input
                            type="text"
                            placeholder="AddressLine 2"
                            value={customer.baddress2}
                            onChange={(event) =>
                              setCustomer({
                                ...customer,
                                baddress2: event.target.value,
                              })
                            }
                          />
                        </Form.Field>
                      </Grid.Row>
                      <Grid.Row>
                        <Form.Field>
                          <Form.Input
                            placeholder="City"
                            value={customer.bcity}
                            onChange={(event) =>
                              setCustomer({
                                ...customer,
                                bcity: event.target.value,
                              })
                            }
                          />
                        </Form.Field>
                      </Grid.Row>
                      <Grid.Row>
                        <Form.Field>
                          <Dropdown
                            search
                            options={stateOptions}
                            placeholder="Select your State"
                            value={customer.bcstate}
                            onChange={(event, data) =>
                              setCustomer({
                                ...customer,
                                bcstate: data.value,
                              })
                            }
                          />
                        </Form.Field>
                      </Grid.Row>
                      <Grid.Row>
                        <Form.Field>
                          <Form.Input
                            type="text"
                            size="small"
                            placeholder="PinCode"
                            value={customer.bpincode}
                            onChange={(event) =>
                              setCustomer({
                                ...customer,
                                bpincode: event.target.value,
                              })
                            }
                          />
                        </Form.Field>
                      </Grid.Row>
                    </Grid>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={"equal"}>
                  <Grid.Column>
                    <Form.Field>
                      <label>Shipping Address :</label>
                    </Form.Field>
                  </Grid.Column>
                  <Grid.Column>
                    <Grid>
                      <Grid.Row>
                        <Form.Field>
                          {" "}
                          <Checkbox
                            onClick={(event) =>
                              setCustomer({
                                ...customer,
                                shipping: !customer.shipping,
                              })
                            }
                            label="Same as Billing Address"
                            checked={customer.shipping}
                          />
                        </Form.Field>
                      </Grid.Row>
                      <Grid.Row>
                        <Form.Field>
                          <Form.Input
                            type="text"
                            placeholder="AddressLine 1"
                            value={customer.saddress1}
                            onChange={(event) =>
                              setCustomer({
                                ...customer,
                                saddress1: event.target.value,
                              })
                            }
                          />
                        </Form.Field>
                      </Grid.Row>
                      <Grid.Row>
                        <Form.Field>
                          {" "}
                          <Form.Input
                            type="text"
                            placeholder="AddressLine 2"
                            value={customer.saddress2}
                            onChange={(event) =>
                              setCustomer({
                                ...customer,
                                saddress2: event.target.value,
                              })
                            }
                          />
                        </Form.Field>
                      </Grid.Row>
                      <Grid.Row>
                        <Form.Field>
                          <Form.Input
                            type="text"
                            placeholder="City"
                            value={customer.scity}
                            onChange={(event) =>
                              setCustomer({
                                ...customer,
                                scity: event.target.value,
                              })
                            }
                          />
                        </Form.Field>
                      </Grid.Row>
                      <Grid.Row>
                        <Form.Field>
                          <Dropdown
                            search
                            selection
                            options={stateOptions}
                            placeholder="Select your state"
                            size="small"
                            value={customer.scstate}
                            onChange={(event) =>
                              setCustomer({
                                ...customer,
                                scstate: event.target.value,
                              })
                            }
                          />
                        </Form.Field>
                      </Grid.Row>
                      <Grid.Row>
                        <Form.Field>
                          <Form.Input
                            type="text"
                            size="small"
                            placeholder="PinCode"
                            value={customer.spincode}
                            onChange={(event) =>
                              setCustomer({
                                ...customer,
                                spincode: event.target.value,
                              })
                            }
                          />
                        </Form.Field>
                      </Grid.Row>
                    </Grid>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Form.Field>
                      <Button primary onClick={sendCustomerInfo}>
                        Add Customer
                      </Button>
                      <Button basic onClick={toggleSideBar}>
                        Cancel
                      </Button>
                    </Form.Field>
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
export default CustomerSideBar;
