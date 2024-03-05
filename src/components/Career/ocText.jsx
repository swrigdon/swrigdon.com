import React from "react";
import {
    Text
} from "@chakra-ui/react"

const ocText = (props) => {
    return(
        <React.Fragment>
            <Text fontSize={props.headingFontSize}>
                Orange County, FL Government - Student Intern (Sep 2015 - Apr 2016)
            </Text>
            <br />
            <Text fontSize={props.fontSize}>
                While an intern for Orange County, I was primarily responsible for maintaining the county's
                website and intranet portal. This was done primarily via HTML and CSS in the context of a
                DNN CMS. I also tested and contributed to the new replacement intranet portal, which was
                created in SharePoint 2013.
            </Text>
        </React.Fragment>
    );
};

export default ocText;