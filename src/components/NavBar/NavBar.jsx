import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import { useCookies } from "react-cookie";


// css imports
import "./NavBar.css";
import { Link } from 'react-router-dom';


function NavBar(props) {

  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken, removeToken] = useCookies(['jwt-token']);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...props}>
        <NavbarBrand id='title'>
          <Link to="/">ShopCart</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <UncontrolledDropdown nav inNavbar style={{marginRight: "2rem"}}>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle >
              <DropdownMenu right>
                <DropdownItem>Cart</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  {Object.keys(token).length != 0 ? <Link onClick={() => removeToken('jwt-token')} to="/login" className='login'>Logout</Link> : <Link to="/signup" className='login'>Sign Up</Link>}
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavbarText>User</NavbarText>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;