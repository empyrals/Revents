import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Image, Menu } from "semantic-ui-react";

function SignedInMenu({ signOut }) {
  return (
    <>
      <Menu.Item position="right">
        <Image avatar spaced="right" src="/assets/user.png" />
        <Dropdown pointing="top left" text="Tim">
          <Dropdown.Menu>
            <Dropdown.Item
              as={Link}
              to="/createEvent"
              text="Create Event"
              icon="plus"
            />
            <Dropdown.Item text="My Profile" icon="user" />
            <Dropdown.Item text="Sign Out" icon="power" onClick={signOut} />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </>
  );
}

export default SignedInMenu;
