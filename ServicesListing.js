import React, {Component} from "react"; 
import {
    Button,
    Row,
    Container, 
    Col
  } from "reactstrap";

class ServicesListing extends Component {
    render(){
        return (
            <>
            <Container className="section text-center">
                <Row>
            <Col md="3">
            <div className="info">
              <div className="description">
                <h1>Facials</h1>
                <h4 className="info-title">HydraFacial MD</h4>
                <p className="description">
                  <strong>HydraFacial MD </strong>is an industry-leading skin care system that elevates the traditional facial. 
                  <br />
                  <br />
                  Only HydraFacial uses patented technology to cleanse, extract, and hydrate. HydraFacial super serums are made with nourishing ingredients that create an instantly gratifying glow.
               <br /> 
               $170
                </p>
                <h4 className="info-title">Custom Facials</h4>
                <p className="description">
                  Using <strong>SkinCeuticals</strong> products, your aesthetician will customize a facial based on your skin's unique needs.
                  <br /> 
                  $100+
                </p>
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="info">
              <div className="description">
              <h1>Peels</h1>
                <h4 className="info-title">Gel Peel</h4>
                <p> A refreshing and vitalizing peel to leave skin fresh, clean, and smooth. 
                 $85
                </p>
                <h4 className="info-title">Red Carpet Ready</h4>
                <p> Beginning with a dermaplaning session, Red Carpet Ready leaves skin fully refreshed and ready for any special event. 
                 $95 <br /> //Includes Dermaplane
                </p>
                <h4 className="info-title">Salicylic Acid</h4>
                <p>
                20% $110 // 30% $125
                </p>
                <h4 className="info-title">Glycolic Acid</h4>
                <p>
                20% $110 // 30% $125
                </p>
                <h4 className="info-title">Pigment Balancing</h4>
                <p>
                  // ask your aesthetician if pigment balance is right for you! <br />
                 $170
                </p>
                <h4 className="info-title">Advanced Corrective</h4>
                <p>
                  // ask your aesthetician if advanced corrective is right for you!<br />
                 $225 
                </p>
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="info">
             
              <div className="description">
              <h1>SkinPen</h1>
                <h4 className="info-title">Mirconeedling</h4>
                <p>
                SkinPen by <strong>Bellus Medical</strong> is the first microneedling device cleared by the FDA, clinically proven to safely and effectively treat facial acne scars for ages 22 and up. <br /> <br />
With as few as three non-invasive  treatments spaced 30 days apart, you can improve your skin's appearance and step out with confidence. <br />$300
                </p>
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="info">
             
              <div className="description">
              <h1>More</h1>
                <h4 className="info-title">LED Therapy</h4>
                <p>
                  $30
                </p>
                <h4 className="info-title">Lymphatic Therapy</h4>
                <p>
                  $30
                </p>
                <h4 className="info-title">Dermaplane</h4>
                <p>
                  As an add-on $30 <br />
                  // a-la-carte $60
                </p>
               
              </div>
            </div>
          
          </Col>
          </Row>
        </Container>
        </>
        );
    }
}
export default ServicesListing; 