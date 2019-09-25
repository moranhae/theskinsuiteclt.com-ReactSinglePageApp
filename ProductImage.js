import React, {Component} from "react";
import { Button, Container } from "reactstrap";


class ProductImage extends Component {
    render(){
        return(
            <>
            <div
              style={{
                backgroundImage: "url(" + require("assets/img/SkinSuite-ProductsHeader.jpg") + ")"
              }}
              className="page-header"
              data-parallax={false}
            >
              <div className="filter" />
              <Container>
                <div className="motto text-center">
                  <h1><strong>SkinCeuticals</strong> Products </h1>
                  <h3>Industry Leading SkinCare</h3>
                  <br />
                  <Button
                    href="/BookPage"
                    className="btn-round mr-1"
                    color="primary"
                    target="_self"
                    outline
                  >
                    Find Your Fit
                  </Button>
                  <Button href="/ReviewsPage"  target="_self" className="btn-round" color="primary" type="button" outline>
                    See Our Reviews
                  </Button>
                </div>
              </Container>
            </div>
          </>
        );
    }
}
export default ProductImage; 