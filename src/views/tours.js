import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import ToursS1 from "../components/tours-s1";
import ToursS2 from "../components/tours-s2";
import ToursS3 from "../components/tours-s3";
import ToursS4 from "../components/tours-s4";

class Tours extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <ToursS1/>
                <ToursS2/>
                <ToursS3/>
                <ToursS4/>
            </Container>    
        );
    }
}

export default Tours;