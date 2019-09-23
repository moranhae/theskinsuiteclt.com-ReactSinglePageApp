import React, {Component} from "react"; 

var headingStyle ={
    backgroundColor: 'lightpink', 
    color: 'black',

};

var subtitleStyle ={
    color: 'green'
};

class SmallHeading extends Component {
    render() {
        return ( 
            <>  
            <div className="typography-line" className="text-center" style={headingStyle}>
            <br></br>
            <h2>
             <div> Welcome to </div>
             <div><strong> The Skin Suite! </strong>
             </div>
            </h2>
            <br></br>
            <br></br>
          </div>  
            </>
        );
    }
}
export default SmallHeading; 