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
                        <h4 className="info-title"><strong>CE Ferulic </strong></h4>
                        <p className="description">
                          An award-winning Vitamin C antioxidant serum proven to deliver unmatched protection against skin aging. <strong>
                            CE Ferulic</strong> helps reduce the appearance of fine lines and wrinkles.
                        </p>
                        <Button className="btn-link" color="primary" href="/BookPage">
                          Try CE Ferulic
                        </Button>
                      </div>
                    </div>
                  </Col>
                  <Col md="3">
                    <div className="info">
                      <div className="description">
                        <h4 className="info-title"><strong>Simply Clean</strong></h4>
                        <p>
                         A simple yet effective daily cleanser, <strong>Simply Clean </strong> 
                         leaves the skin feeling clean, refreshed, and ready for any treatment. 
                        </p>
                        <Button className="btn-link" color="primary" href="/BookPage">
                         Try Simply Clean
                        </Button>
                      </div>
                    </div>
                  </Col>
                  <Col md="3">
                    <div className="info">
                      <div className="description">
                        <h4 className="info-title"><strong>Sheer Defense</strong></h4>
                        <p>
                        As a lightweight sunscreen,  <strong>Sheer Physical UV Defense SPF 50 </strong>  
                        provides broad-spectrum UVA/UVB protection. This lightweight formula dries quickly, leaving a smooth matte finish. 
                        </p>
                        <Button className="btn-link" color="primary" href="/BookPage">
                          Try Sheer Defense
                        </Button>
                      </div>
                    </div>
                  </Col>
                  <Col md="3">
                    <div className="info">
                      <div className="description">
                        <h4 className="info-title"><strong>Daily Moisture</strong></h4>
                        <p>
                          A lightweight and pore-minimizing moisturiser, <strong>Daily Moisture </strong>
                        is designed to hydrate and nourish all skin types. 
                        Combine with Hydrating B5 Gel for maximum moisture retention. 
                        </p>
                        <Button className="btn-link" color="primary" href="/BookPage">
                          Try Daily Moisture 
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