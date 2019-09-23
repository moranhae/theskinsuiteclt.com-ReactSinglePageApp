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
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import TeamBios from "views/index-sections/TeamBios.js";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Let's talk product</h2>
                <h5 className="description">
                 <strong>The Skin Suite</strong> @ Jon Ric Med Spa partners exclusively with SkinCeuticals skincare. 
                 From the treatments to the take-home products, SkinCeuticals provides The Skin Suite's clientele with tested,
                 reliable, and effective products. <br></br> 
                 Allow The Skin Suite team to assist you in finding the right products for you. 
                </h5>
                <br />
                <Button
                  className="btn-round"
                  color="primary"
                  href="/ProductPage"
                  onClick={e => e.preventDefault()}
                >
                  Shop Products
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-primary">
                    <i className="nc-icon nc-album-2" />
                    
                  </div>
                  <div className="description">
                    <h4 className="info-title">Photo-Ready</h4>
                    <p className="description">
                      Do you have a special something coming up?
                     Let us help you find your glow. 
                    </p>
                    <Button className="btn-link" color="primary" href="/ServicesPage">
                      See Our Services
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-primary">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Find Your Glow</h4>
                    <p>
                      Energizing Chemical Peels will leave you feeling fresh, energized, and confident. 
                    </p>
                    <Button className="btn-link" color="primary" href="/ServicesPage">
                      Find Your Favorite
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-primary">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Ace Your Self-Care</h4>
                    <p>
                      A customized skincare regimen leaves you feeling confident and put-together. 
                    </p>
                    <Button className="btn-link" color="primary" href="/ProductPage">
                     The Products
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-primary">
                    <i className="nc-icon nc-sun-fog-29" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">A Brighter You</h4>
                    <p>
                      Allow <strong>The Skin Suite</strong> to guide you towards your most confident you!
                    </p>
                    <Button className="btn-link" color="primary" href="/BookPage">
                      Let's Do It 
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      <TeamBios />
    </>
  );
}

export default LandingPage;