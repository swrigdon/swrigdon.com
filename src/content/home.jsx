import React from "react";
import { Box, Center } from "@chakra-ui/react";
import "../css/content.css";
import "../css/home.css";

export default class Home extends React.Component{

    constructor(props){

        super(props);
        this.state = {

            contentHeight : window.innerHeight
        };
    }

    componentDidMount(){

        this.setState({

            contentHeight : window.innerHeight - document.getElementById('topBar').clientHeight
        });
    }

    render(){

        return(
            <div 
                className   = "Content"
                style       = {{height : this.state.contentHeight, minHeight : this.state.contentHeight}}
            >
                <Box
                    w           = "100%"
                    h           = {this.state.contentHeight}
                    bg          = "purple"
                    minH        = {this.state.contentHeight}
                    className   = "HomeBackground"
                >
                </Box>
                <Center>
                    <h1 className = "HomeTitle">Stephen William Rigdon</h1>
                </Center>
            </div>
        );
    }
}
