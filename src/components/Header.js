import React from "react";
import { connect } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../assets/images/logo.png";
import { getMenus } from "../redux/selectors";
import MenuItem from "./MenuItem";

const Header = ({ menus }) => {
  let menu;
  if (menus) {
    menu = (
      <>
        {menus.map((m, i) => {
          return <MenuItem item={m} key={m.slug} />;
        })}
      </>
    );
  } else {
    menu = <div></div>;
  }
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <img
          src={Logo}
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">{menu}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  const menus = getMenus(state);
  return { menus };
};

export default connect(mapStateToProps)(Header);
