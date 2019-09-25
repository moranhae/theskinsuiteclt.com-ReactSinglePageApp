import React, {Component} from "react";
import {
    Button,
    Container,
    Row,
    Col
  } from "reactstrap";

class ReviewsListing extends Component {
    render(){
        return(
            <div className="section text-center">
          <Container>
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="description">
                    <h4 className="info-title">Tracy S.</h4>
                    <p className="description">
                    Lauren is awesome - beautiful office, great products, and the HydraFacial was the perfect skin prep for my wedding day. It gave my skin soft texture and a glow with no downtime.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="description">
                    <h4 className="info-title">Tiffany A.</h4>
                    <p>
                    Lauren is wonderful at what she does! You will definitely leave with a glowing, smooth and refreshing face. 
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="description">
                    <h4 className="info-title">Beth H.</h4>
                    <p>
                    Loved the Hydrafacial! Leanne is wonderful! My skin is glowing! 
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="description">
                    <h4 className="info-title">Brandy W.</h4>
                    <p>
                    I've been going to Lauren for almost a year now and absolutely love her!
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="description">
                    <h4 className="info-title">Christina D.</h4>
                    <p className="description">
                    For the past 4 years, I have only seen Lauren for my skin care and facials. I am 37 and am told on a regular basis that I look as though I am in my late 20's. She not only has taught me the best practices in caring for my skin, but suggested the best regimen and given me the most professional and soothing facials.
                    <br />
                    <br /> She is my "forever" esthetician! I highly recommend her services and can guarantee that you will love her just the same. 
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="description">
                    <h4 className="info-title">Eric G.</h4>
                    <p>
                     
                    I’ve been going to Lauren for at least 5 years - shes really the best I’ve ever experienced. 

I take my skin seriously, and I wouldn’t trust anyone else with it. 
<br /> <br />
She has the know-how, the gentle touch, and the precision to keep my skin looking amazing. 
Lauren is also very accommodating to my schedule - she always makes it happen!
            </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="description">
                    <h4 className="info-title">Jaclyn C.</h4>
                    <p>
                    Love, love, love it here! I go monthly for the Hydrafacial. Lauren is very in tune with my skin and knows exactly what I need. I’m going to start incorporating some of her other services that she offers! 
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="description">
                    <h4 className="info-title">McKenna D.</h4>
                    <p>
                    Hydra-facial and derma-planing by Lauren makes me feel like a new girl! The location is super convenient and the services are top notch! Check out The Skin Suite!
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          </div>
        );
    }
}
export default ReviewsListing; 