import React, { Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    NavbarText,
} from 'reactstrap';

class AppNavbar extends Component {
    state = {
        isOpen: false
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };
    render(){
        return(
            <div>
                <Navbar
                    color="light"
                    expand="sm"
                    fixed="top"
                    light
                >
                    <NavbarBrand href="/">
                    Bottlr
                    </NavbarBrand>
                    <NavbarToggler onClick={function noRefCheck(){}} />
                    <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                        <NavLink href="/feed">
                            Feed
                        </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="https://github.com/TheIvanHu/bottlr">
                            GitHub
                        </NavLink>
                        </NavItem>
                        <UncontrolledDropdown
                        inNavbar
                        nav
                        >
                        <DropdownToggle
                            caret
                            nav
                        >
                            Options
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                            Option 1
                            </DropdownItem>
                            <DropdownItem>
                            Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                            Reset
                            </DropdownItem>
                        </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>
                        Simple Text
                    </NavbarText>
                    </Collapse>
                </Navbar>
            </div>
        )
    }   
}

export default AppNavbar;