import React        from "react";
import {
    Container,
    Center,
    Text
} from '@chakra-ui/react';
import {
    Routes,
    Route
}                   from "react-router-dom";
import Home         from "./home";
import AboutMe      from "./aboutMe";
import Career       from "./career";
import Education    from "./education";
import ProjectHome  from "./projects/home";

const ContentPane = (props) =>{
    const getContainerHeight = () => {
        if(document.getElementById("topbar")?.offsetHeight) {
            return props.height - document.getElementById("topbar").offsetHeight;
        } else {
            return props.height;
        }
    };

    return(
        <Container
            margin='0'
            padding='0'
            minWidth={props.width}
            minHeight={getContainerHeight()}
            backgroundImage= 'url("https://cloud.swrigdon.com/s/8n86SXNBiTQQPkN/preview")'
            backgroundSize='cover'
        >
            <Center paddingTop='10%'>
                <Text fontSize='5em'>
                    Stephen William Rigdon
                </Text>
            </Center>
            <Routes>
                <Route path = "/" element={Home}/>
                <Route path = "/aboutme" element={AboutMe}/>
                <Route path = "/education" element={Education}/>
                <Route path = "/career" element={Career}/>
                <Route path = "/projects" element={ProjectHome}/>   
            </Routes> 
        </Container>
    );
};

export default ContentPane;
