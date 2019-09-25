import React, {Component} from "react"; 
// reactstrap components
import {
    Button,
    Container,
    Row,
    Col
  } from "reactstrap";
  import ServicesListing from "views/index-sections/ServicesListing";

class ServicesBody extends Component {
    render(){
        return(
            <> <br />
            <div className="section profile-content">
              <Container> 
                    <div className="text-center">
                <h1>Services <strong>Menu</strong></h1><br />
            </div>
            <Row>
                  <Col className="ml-auto mr-auto text-center" md="6">
                    <br />
                    <Button className="btn-round"  target="_self" color="primary" href="/BookPage">
                     Ready? Book Now!
                    </Button>
                  </Col>
                </Row>
                    <Row>

                        <ServicesListing />
                    </Row>
                <br />
                
                <br />
              </Container>
            </div>
          </>
       
        );
    }
}
export default ServicesBody; 