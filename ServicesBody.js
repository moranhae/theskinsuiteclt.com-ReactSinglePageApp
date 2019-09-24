import React, {Component} from "react"; 
// reactstrap components
import {
    Button,
    Label,
    FormGroup,
    Input,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
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

                        <ServicesListing />
                    </Row>
                <Row>
                  <Col className="ml-auto mr-auto text-center" md="6">
                    <br />
                    <Button className="btn-round" color="primary" href="/BookPage">
                     Ready? Book Now!
                    </Button>
                  </Col>
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