/** @format */

import React, { useEffect, useReducer, useState } from "react";
import { Container, Grid, Header } from "semantic-ui-react";
import ProfileCard from "./ProfileCard";
import ProfileForm from "./ProfileForm";
import ProfileContext from "./ProfileContext";

const Profile = () => {
  const COMPANY_INFO = "company_info";
  const storedCompanyProfile = localStorage.getItem(COMPANY_INFO);
  const initialState = {
    enterpriseName: "",
    enterpriseAddress: "",
    enterpriseGstin: "",
    enterprisePhoneNumber: "",
    enterpriseEmail: "",
  };
  const [ui, setUI] = useState(() => {
    return storedCompanyProfile ? true : false;
  });
  const [buttonText, setButtonText] = useState("save");

  const reducer = (state, action) => {
    switch (action.type) {
      case "onChange":
        return { ...action.value };
      case "save":
        localStorage.setItem(COMPANY_INFO, JSON.stringify(state));
        setUI(!ui);
        return state;
      case "delete":
        localStorage.removeItem(COMPANY_INFO);
        setUI(false);
        return initialState;
      case "update":
        setButtonText("Update & Save");
        setUI(false);
        return state;
      default:
        return state;
    }
  };

  const [enterpriseDetails, dispatch] = useReducer(
    reducer,
    storedCompanyProfile ? JSON.parse(storedCompanyProfile) : initialState
  );

  useEffect(() => {}, [ui]);
  return (
    <>
      <Container text>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Header as={"h3"} dividing textAlign="center">
                Company profile
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <ProfileContext.Provider
                value={{
                  buttonText,
                  enterpriseDetails,
                  dispatch,
                }}
              >
                {ui ? <ProfileCard /> : <ProfileForm />}
              </ProfileContext.Provider>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
};

export default Profile;
