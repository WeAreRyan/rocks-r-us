import * as userService from "../../utilities/users-service";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./NavBar.css";

export default function NavBar({ user, setUser, showCart, cartToggle }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>
      <div className="navBar">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand
            href="/"
            style={{ marginLeft: 50, marginTop: 10, marginBottom: 10 }}
          >
            Rocks-R-Us
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="navLink" href="/rocks">
              Checkout These Rocks
            </Nav.Link>
            <Nav.Link className="navLink" onClick={cartToggle}>
              {!showCart ? "Show Cart" : "Hide Cart"}
            </Nav.Link>
            <Nav.Link className="navLink" href="/orders/history">
              Order History
            </Nav.Link>
            <Nav.Link className="navLinkLogout" href="" onClick={handleLogOut}>
              LogOut
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    </>
  );
}
