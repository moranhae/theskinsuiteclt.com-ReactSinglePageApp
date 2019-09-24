import React, {Component} from "react"; 

var headingStyle ={
    backgroundColor: 'lightpink', 
    color: 'black',

};


class SmallHeading extends Component {
    render() {
        return ( 
            <>  
            <div className="typography-line" className="text-center" style={headingStyle}>
            <br></br>
            <h2>
             <div><br /> <br /> Welcome to </div>
             <div><strong> The Skin Suite! <br /> <br /> </strong>
             </div>
            </h2>
            <div>
            </div>
            <br></br>
            <br></br>
          </div> 
           
            </>
        );
    }
}
export default SmallHeading; 