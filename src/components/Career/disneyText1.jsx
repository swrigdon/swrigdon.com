import React from "react";
import {
    Text
} from "@chakra-ui/react"

const disneyText1 = (props) => {
    return(
        <React.Fragment>
            <Text fontSize={props.headingFontSize}>
                Disney - System Development and Sustainment Analyst (Feb 2020 - Aug 2021)
            </Text>
            <br />
            <Text fontSize={props.fontSize}>
                While at Disney, I worked for the Systems Integration team at the Disney Reservation Center.
                The goal of my team was to provide solutions both from vendors and made in-house to assist phone
                agents at the reservation center that helped guests book everything from park visits, to hotel stays,
                to conventions, to cruises. Our web applications were largely hosted on SharePoint 2013, and we largely used
                JavaScript and TypeScript with React, with some occasional jQuery and Powershell.
            </Text>
            <br />
            <Text fontSize={props.fontSize}>
                While employed at Disney I led the creation of several high-impact web applications, such as
                a cancellation tracking application used by executive leadership throughout Walt Disney World at
                the onset of the pandemic, an application to handle the employee annual reviews of the phone agents, which had been
                a manual process before the pandemic, a redesign of the reservation center's agent quality assurance tracking
                application, and a TypeScript API to facilitate data transfer between all of my team's web applications so that we
                could begin the process of migrating away from SharePoint.
            </Text>
        </React.Fragment>
    );
};

export default disneyText1;