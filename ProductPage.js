import React, {Component} from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader";
import ProductBody from "views/index-sections/ProductBody.js";



class ProductPage extends Component {
    render(){
        return(
            <>
            <IndexNavbar />
            <ProfilePageHeader />
            <ProductBody />      
        </>
        );
    }
}
export default ProductPage; 