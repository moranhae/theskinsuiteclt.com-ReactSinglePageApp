import React, {Component} from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader";
import ProductBody from "views/index-sections/ProductBody.js";
import DemoFooter from "components/Footers/DemoFooter";
import ProductImage from "views/index-sections/ProductImage";


class ProductPage extends Component {
    render(){
        return(
            <>
            <IndexNavbar />
            <ProfilePageHeader />
            <ProductBody /> 
            <ProductImage />
            <DemoFooter />     
        </>
        );
    }
}
export default ProductPage; 