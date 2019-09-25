import React, {Component} from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader";
import ReviewsListing from "views/index-sections/ReviewsListing";
import ServicesPageImage from "views/index-sections/ServicesPageImage";
import DemoFooter from "components/Footers/DemoFooter";
class ReviewsPage extends Component {
    render(){
        return(
            <>
            <IndexNavbar />
            <ProfilePageHeader />
            <div className="text-center">
                <h1><strong>Glowing </strong> Reviews</h1>
            </div>
            <ReviewsListing />
            <ServicesPageImage />
            <DemoFooter />
        </>
        );
    }
}
export default ReviewsPage; 