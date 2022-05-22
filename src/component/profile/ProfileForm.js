/** @format */

import React, { useContext } from "react";
import { Container, Grid, Form, Input, Button } from "semantic-ui-react";
import ProfileContext from "./ProfileContext";

const ProfileForm = () => {
  const { buttonText, enterpriseDetails, enterpriseDispatch } = useContext(
    ProfileContext
  );
  const onClickSave = (event) => {
    event.preventDefault();
    enterpriseDispatch({ type: "save" });
  };
  //  console.log("ProfileFome ->enterprise", enterpriseDetails);
  const handleOnChange = (event) => {
    let keyName = event.target.name;
    let value = event.target.value;
    enterpriseDetails[keyName] = value;
    enterpriseDispatch({ type: "onChange", value: { ...enterpriseDetails } });
  };

  return (
    <>
      <Container text>
        <Form onSubmit={onClickSave} size="mini">
          <Grid columns={"equal"}>
            <Grid.Row>
              <Grid.Column>
                <Form.Field>
                  <label>Company Name :</label>
                  <Input
                    type="text"
                    placeholder="Your Company name"
                    name="enterpriseName"
                    value={enterpriseDetails["enterpriseName"]}
                    onChange={(event) => handleOnChange(event)}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Form.Field>
                  <label>Company Address :</label>
                  <textarea
                    placeholder="Enter Address"
                    name="enterpriseAddress"
                    value={enterpriseDetails["enterpriseAddress"]}
                    onChange={(event) => handleOnChange(event)}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Form.Field>
                  <label>GSTIN :</label>
                  <Input
                    type="text"
                    placeholder="GSTIN"
                    name="enterpriseGstin"
                    value={enterpriseDetails["enterpriseGstin"]}
                    onChange={(event) => handleOnChange(event)}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Form.Field>
                  <label>Phone Number :</label>
                  <Input
                    type="text"
                    placeholder="Enter your Phone number"
                    name="enterprisePhoneNumber"
                    value={enterpriseDetails["enterprisePhoneNumber"]}
                    onChange={(event) => handleOnChange(event)}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Form.Field>
                  <label>Email :</label>
                  <Input
                    type="email"
                    placeholder="enter email address"
                    name="enterpriseEmail"
                    value={enterpriseDetails["enterpriseEmail"]}
                    onChange={(event) => handleOnChange(event)}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Form.Field>
                <Button type="submit" primary>
                  {buttonText}
                </Button>
              </Form.Field>
            </Grid.Row>
          </Grid>
        </Form>
      </Container>
    </>
  );
};

export default ProfileForm;
