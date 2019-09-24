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

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function LogoBox() {
  return (
    <>
      <Container className="tim-container">
        <div id="images">
          <Container>
            <Row>
              <Col md="3" sm="6">
                <h4 className="images-title">Rounded Image</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/uriel-soberanes.jpg")}
                />
                <div className="img-details">
                  <div className="author">
                    <img
                      alt="..."
                      className="img-circle img-no-padding img-responsive"
                      src={require("assets/img/faces/joe-gardner-2.jpg")}
                    />
                  </div>
                  <p>Sonia Green</p>
                </div>
              </Col>
              <Col className="mr-auto ml-auto" md="2" sm="3">
                <h4 className="images-title">Circle Image</h4>
                <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/faces/kaci-baum-2.jpg")}
                />
                <p className="text-center">Brigitte Bardot</p>
              </Col>
              <Col className="mr-auto" md="2" sm="3">
                <h4 className="images-title">Thumbnail</h4>
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/faces/erik-lucatero-2.jpg")}
                />
                <p className="text-center">John Keynes</p>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
}

export default LogoBox;