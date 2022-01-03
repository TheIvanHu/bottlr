import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown,
  // DropdownItem,
  // DropdownToggle,
  // DropdownMenu,
  NavbarText,
  // Container,
} from "reactstrap";
import RegisterModal from "./RegisterModal";
import Logout from "./Logout";

const user = null;

class AppNavbar extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    return (
      <div className="row">
        <Navbar color="light" expand="sm" fixed="top" light>
          <NavbarBrand href="/">Bottlr</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() { }} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/feed">Feed</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/TheIvanHu/bottlr">
                  GitHub
                </NavLink>
              </NavItem>

              {!user && (
                <NavItem>
                  <NavLink href="/login">Login</NavLink>
                </NavItem>
              )}
              {!user && (
                <NavItem>
                  <RegisterModal />
                </NavItem>
              )}
              {user && (
                <NavItem>
                  <Logout />
                </NavItem>
              )}
            </Nav>
            {user && <NavbarText>Welcome {user}</NavbarText>}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
