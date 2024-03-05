import React from "react";
import {
    Text
} from "@chakra-ui/react"

const disneyText3 = (props) => {
    return(
        <React.Fragment>
            <Text fontSize={props.headingFontSize}>
                Disney - System Integration Intern (Jun 2017 - Jun 2018)
            </Text>
            <br />
            <Text fontSize={props.fontSize}>
                While an intern the first time at Disney, I worked for the Systems Integration team at the
                Disney Reservation Center. My task was to develop and application to automate and enhance
                the very manual process of onboarding and offboarding phone agents. Using a mixture of SharePoint 2013,
                Nintex Workflows on top of the SharePoint workflow engine, and jQuery on the front end, I was able to work
                with my fellow intern and produce a prototype of the application.  
            </Text>
        </React.Fragment>
    );
};

export default disneyText3;