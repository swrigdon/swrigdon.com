import React from "react";
import {
    Text
} from "@chakra-ui/react"

const disneyText2 = (props) => {
    return(
        <React.Fragment>
            <Text fontSize={props.headingFontSize}>
                Disney - Web Development Intern (May 2019 - Feb 2020)
            </Text>
            <br />
            <Text fontSize={props.fontSize}>
                While an intern the second time at Disney, I worked for the Systems Integration team at
                the Disney Reservation Center. My primary focus was on shoring up my team's
                operation processes. This includes incorporating legacy products into version control via
                GitLab, and creating templates and processes for full CI/CD for all new applications via
                GitLab Runners and Jenkins. During this internship I also wrote the Reservation Center's first
                React applications, and created robust custom application templates to give my team's developers a codebase
                to start upon.
            </Text>
        </React.Fragment>
    );
};

export default disneyText2;