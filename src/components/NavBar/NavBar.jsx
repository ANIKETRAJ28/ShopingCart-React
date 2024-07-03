import React, { useContext, useEffect, useState } from 'react';
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
import { UserContext } from '../../context/UserContext';
import axios from 'axios';
import { CartContext } from '../../context/CartContext';
import { getCartByUser } from '../../apis/fakeStoreApis';


function NavBar(props) {

  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken, removeToken] = useCookies(['jwt-token']);
  const toggle = () => setIsOpen(!isOpen);
  const { user, setUser } = useContext(UserContext);
  const { cart, setCart } = useContext(CartContext);

  async function getUserCart(userId) {
    const cart = await axios.get(getCartByUser(userId));
    setCart(cart.data);
  }

  useEffect(() => {
    user && getUserCart(user.id);
  }, [token])

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
                {user && <DropdownItem><Link to={`/cart/${user.id}`}>Cart {cart.length != 0 && `(${cart.length})`}</Link></DropdownItem>}
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  {Object.keys(token).length != 0 ? <Link onClick={() => {
                        removeToken('jwt-token', {httpOnly: true});
                        axios.get(`${import.meta.env.VITE_FAKE_STORE_URL}/logout`, {withCredentials: true})
                        setCart({});
                        setUser(null);
                      }
                    } to="/login" className='login'>
                      Logout
                    </Link> : <Link to="/signup" className='login'>Sign Up</Link>
                  }
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            {user && <NavbarText>{user.username}</NavbarText>}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;