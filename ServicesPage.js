import React, {Component} from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader";
import ServicesBody from "views/index-sections/ServicesBody";
import DemoFooter from "components/Footers/DemoFooter.js";


class ServicesPage extends Component {
    render(){
        return(
            <>
            <IndexNavbar />
            <ProfilePageHeader />
            <ServicesBody />
            <DemoFooter />
        </>
        );
    }
}
export default ServicesPage; 