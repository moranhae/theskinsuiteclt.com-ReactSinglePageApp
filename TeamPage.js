import React, {Component} from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader";
import TeamBios from "views/index-sections/TeamBios.js"
import DemoFooter from "components/Footers/DemoFooter.js";

class TeamPage extends Component {
    render(){
        return(
            <>
            <IndexNavbar />
            <ProfilePageHeader />
            <TeamBios />
            <DemoFooter />
        </>

       
            
            );
    }
}
export default TeamPage; 