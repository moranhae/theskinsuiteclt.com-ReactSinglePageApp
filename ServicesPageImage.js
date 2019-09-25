import React, {Component} from "react";
import { Button, Container } from "reactstrap";

class ServicesPageImage extends Component {
    render(){
        return(
            <>
            <div
              style={{
                backgroundImage: "url(" + require("assets/img/SkinSuite-BookNowHeaderLauren.jpg") + ")"
              }}
              className="page-header"
              data-parallax={false}
            >
              <div className="filter" />
              <Container>
                <div className="motto text-center">
                  <h1>The Skin Suite </h1>
                  <h3>@ Jon Ric Med Spa</h3>
                  <br />
                  <Button
                    href="/BookPage"
                    className="btn-round mr-1"
                    color="primary"
                    target="_self"
                    outline
                  >
                    Book Now
                  </Button>
                  <Button href="/ReviewsPage" outline target="_self" className="btn-round" color="primary" type="button">
                    See Our Reviews
                  </Button>
                </div>
              </Container>
            </div>
          </>
        );
    }
}
export default ServicesPageImage; 