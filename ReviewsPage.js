import React, {Component} from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader";


class ReviewsPage extends Component {
    render(){
        return(
            <>
            <IndexNavbar />
            <ProfilePageHeader />
            <div className="text-center">
                <h1>TheSkinSuite</h1>
            </div>
        </>
        );
    }
}
export default ReviewsPage; 