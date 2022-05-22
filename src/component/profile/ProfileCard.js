/** @format */

import React, { useContext } from "react";
import { Card, Divider, Icon, Button } from "semantic-ui-react";
import ProfileContext from "./ProfileContext";

const ProfileCard = () => {
  const { enterpriseDetails, enterpriseDispatch } = useContext(ProfileContext);

  const onDeleteProfile = (event) => {
    event.preventDefault();
    enterpriseDispatch({ type: "delete" });
  };

  const onEditProfile = (event) => {
    event.preventDefault();
    enterpriseDispatch({ type: "update" });
  };

  return (
    <>
      <Card.Group>
        <Card>
          <Card.Content>
            <Card.Header>{enterpriseDetails["enterpriseName"]}</Card.Header>
            <Card.Meta>
              GSTIN : {enterpriseDetails["enterpriseGstin"]}
            </Card.Meta>
            <Divider />
            <Card.Description>
              <Icon name="address card outline" style={{ color: "green" }} /> :
              {enterpriseDetails["enterpriseAddress"]}
            </Card.Description>
            <Divider />
            <Card.Description>
              <Icon name="phone" style={{ color: "green" }} />:{" "}
              {enterpriseDetails["enterprisePhoneNumber"]}
            </Card.Description>
            <Divider />
            <Card.Description>
              <Icon name="mail" style={{ color: "green" }} />:{" "}
              {enterpriseDetails["enterpriseEmail"]}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button
                basic
                color="green"
                icon="pencil"
                onClick={(event) => onEditProfile(event)}
              />
              <Button
                basic
                color="red"
                icon="trash alternate"
                onClick={(event) => onDeleteProfile(event)}
              />
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </>
  );
};

export default ProfileCard;
