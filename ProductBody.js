import React, {Component} from "react";
import {
    Button,
    Container,
    Row,
    Col
  } from "reactstrap";

class ProductBody extends Component {
    render(){
        return(
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
                  </Col>
                </Row>
                <br />
                <h1>Best Sellers</h1>
                <br />
                <Row>
                  <Col md="3">
                    <div className="info">
                      <div className="description">
                        <h4 className="info-title">CE Ferulic</h4>
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
                      <div className="description">
                        <h4 className="info-title">Sheer Defense</h4>
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
                      <div className="description">
                        <h4 className="info-title">Simply Clean</h4>
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
                      <div className="description">
                        <h4 className="info-title">Daily Moisture</h4>
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
        </>
        );
    }
}
export default ProductBody; 