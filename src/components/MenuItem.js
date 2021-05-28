import React from "react";
import { connect } from "react-redux";
import { Nav, NavDropdown, NavItem } from "react-bootstrap";
import { getCurrentMenu } from "../redux/selectors";
import { setCurrentMenu } from "../redux/actions";

const MenuItem = (props) => {
  const handleClick = (item) => {
    props.setCurrentMenu(item);
  };

  if (props.item.children) {
    return (
      <>
        <NavDropdown title={props.item.title} id="basic-nav-dropdown">
          {props.item.children.map((m, i) => {
            return (
              <NavDropdown.Item onClick={() => handleClick(m)} key={m.slug}>
                {m.title}
              </NavDropdown.Item>
            );
          })}
        </NavDropdown>
      </>
    );
  } else {
    return (
      <>
        <NavItem onClick={() => handleClick(props.item)}>
          <Nav.Link>{props.item.title}</Nav.Link>
        </NavItem>
      </>
    );
  }
};

const mapStateToProps = (state) => {
  const acitve = getCurrentMenu(state);
  return { acitve };
};

export default connect(mapStateToProps, { setCurrentMenu })(MenuItem);
