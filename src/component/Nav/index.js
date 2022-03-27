import React from "react";
import { Container, Menu, MenuItem, Image } from "semantic-ui-react";
import Logo from "../../assets/image.png";
import { Link } from "react-router-dom";

const Nav = () => {
  const itemClick = (e, { name }) => {
    console.log(name);
  };

  return (
    <>
      <Container text padding="true">
        <Menu secondary stackable>
          <MenuItem name="Home" onClick={itemClick}>
            <Image src={Logo} size="tiny" circular />
          </MenuItem>
          <Menu.Item
            as={Link}
            to="/"
            name="Home"
            onClick={itemClick}
            position="right"
          >
            Home
          </Menu.Item>
          <Menu.Item as={Link} to="/contact" name="Contact" onClick={itemClick}>
            Contact Us
          </Menu.Item>
          <Menu.Item as={Link} to="/billing" name="Billing" onClick={itemClick}>
            Billing
          </Menu.Item>
        </Menu>
      </Container>
    </>
  );
};

export default Nav;
