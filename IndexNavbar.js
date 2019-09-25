/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

var linkStyle ={
  color: 'black', 
};

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("nav-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("pink");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor, "bg-primary" )} expand="lg">
      <Container>
        <div className="navbar-translate"
          >
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            target="_self"
            title="The Skin Suite | Charlotte, NC"
          >
            The Skin Suite
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
          <NavItem>
              <NavLink style={linkStyle}
                data-placement="bottom"
                href="https://www.instagram.com/theskinsuiteclt/"
                target="_blank"
                title="Follow Us On Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={linkStyle}
                data-placement="bottom"
                href="https://www.facebook.com/theskinsuiteCLT/"
                target="_blank"
                title="Follow Us On Facebook"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={linkStyle}
                data-placement="bottom"
                href= "ServicesPage"
                target="_self"
                title="See Our Services"
              >
                Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={linkStyle}
                href ="ProductPage"
                target="_self"
                title="SkinCeuticals Products"
              >
             Products
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={linkStyle}
                href="TeamPage"
                target="_self"
                title="Our Estheticians"
              >
             Our Team
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={linkStyle}
                href="ReviewsPage"
                target="_self"
              >
             Reviews
              </NavLink>
            </NavItem>
            <NavItem>
              <Button 
                className="btn-round"
                color="primary"
                href="BookPage"
                target="_self"
              >
                Schedule A Service
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
