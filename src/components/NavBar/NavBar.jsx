import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import "./NavBar.css"

export default function NavBar({ user, setUser, showCart, cartToggle }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
<>
<div className="navBar">
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/" style={{marginLeft : 50, marginTop : 10, marginBottom : 10}} >Rocks-R-Us</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Checkout These Rocks</Nav.Link>
            <Nav.Link onClick={cartToggle}>{!showCart ? "Show Cart" : "Hide Cart"}</Nav.Link>
            <Nav.Link href="" onClick={handleLogOut}>Order History</Nav.Link>
            <Nav.Link className="ml-auto" href="" onClick={handleLogOut}>LogOut</Nav.Link>
          </Nav>
      </Navbar>
      </div>
    </>












    // <nav>
    //   <span>Welcome, {user.name}</span>
    //   &nbsp; | &nbsp;
    //   <Link to="" onClick={cartToggle}>{!showCart ? "Show Cart" : "Hide Cart"}</Link>
    //   &nbsp; | &nbsp;
    //   <Link to="./orders/history">View Order History</Link>
    //   &nbsp; | &nbsp;
    //   <Link to="" onClick={handleLogOut}>
    //     Log Out
    //   </Link>
    // </nav>
  );
}
