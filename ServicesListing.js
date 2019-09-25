import React, {Component} from "react"; 
import {
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
                <br /> $85
                </p>
                <h4 className="info-title">Red Carpet Ready</h4>
                <p> Beginning with a dermaplaning session, Red Carpet Ready leaves skin fully refreshed and ready for any special event. 
                <br /> $95 <br /> //Includes Dermaplane
                </p>
                <h4 className="info-title">Salicylic Acid</h4>
                <p>
                The best treatment for whiteheads and blackheads, our <strong>
                  Salicylic Acid
                </strong> peel dissolves pore-clogging debris and helps prevent acne formation.<br />
                Available in two formulations! <br />
                20% $110 // 30% $125
                </p>
                <h4 className="info-title">Glycolic Acid</h4>
                <p>
                The industry leader in chemical exfoliation, our <strong>
                  Glycolic Acid
                </strong> peel gently removes the outermost layer of dead skin cells.<br />
                 Perfect for scarring, skin discoloration and signs of aging, like fine lines and wrinkles.
             <br />
             Available in two formulations!
              <br />
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
With as few as three non-invasive  treatments spaced 30 days apart, you can drastically improve your skin's appearance and step out with confidence. <br />$300
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
                  Our <strong>LED Therapy</strong> treatment helps refine and correct age spots, acne, and wrinkles. 
                  <br />
              
              Unlike other types of light therapy, LEDs do not contain ultraviolet rays. Therefore, they’re safe for regular use.
                  <br />
                  $30
                </p>
                <h4 className="info-title">Lymphatic Therapy</h4>
                <p>
                  Manual <strong> Lymphatic Massage </strong> is a gentle treatment used to help assist the Lymphatic and Circulatory systems in the movement of fluids, toxins, and other blockages in order to improve immune response, skin circulation, and overall wellness. 
                  <br />
                  $30
                </p>
                <h4 className="info-title">Dermaplane</h4>
                <p>
                  Your aesthetician will gently scrape the surface of your skin with a surgical scalpel, removing peach fuzz and dead skin cells. 
                  <br /> An excellent form of physical exfoliation, <strong>Dermaplaning </strong> will leave your skin smooth and ready for any treatment or product. 
                  <br />
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