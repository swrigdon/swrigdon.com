import React                            from "react";
import { Box, Center }                  from "@chakra-ui/react";
import { FontAwesomeIcon }              from "@fortawesome/react-fontawesome";
import { faEnvelope }                   from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin }   from "@fortawesome/free-brands-svg-icons";
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
                <div 
                    className = "HomeLinks"
                    style = {{width: "100%"}}
                >
                    <Center>
                        <a
                            href    = "https://www.linkedin.com/in/stephen-rigdon-309309a6/"
                            style   = {{marginRight: "2.5%"}}
                            target  = "_blank"
                            rel     = "noreferrer"
                        >
                            <FontAwesomeIcon
                                icon = {faLinkedin}
                                size = "4x"
                            />
                        </a>
                        <a
                            href    = "https://github.com/swrigdon"
                            style   = {{marginLeft: "2.5%", marginRight: "2.5%"}}
                            target  = "_blank"
                            rel     = "noreferrer"
                        >
                            <FontAwesomeIcon
                                icon = {faGithubSquare}
                                size = "4x"
                            />
                        </a>
                        <a
                            href    = "mailto:swrigdon@gmail.com"
                            style   = {{marginLeft: "2.5%"}}
                            target  = "_blank"
                            rel     = "noreferrer"
                        >
                            <FontAwesomeIcon
                                icon = {faEnvelope}
                                size = "4x"
                            />
                        </a>
                    </Center>
                </div>
            </div>
        );
    }
}
