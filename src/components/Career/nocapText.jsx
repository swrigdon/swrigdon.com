import React from "react";
import {
    Text
} from "@chakra-ui/react"

const nocapText = (props) => {
    return(
        <React.Fragment>
            <Text fontSize={props.headingFontSize}>
                NoCap Live, LLC - Software Engineer (Aug 2021 - Sep 2022)
            </Text>
            <br />
            <Text fontSize={props.fontSize}>
                NoCap was a Series A startup that focused on partnering with artists to livestream shows and create
                virtual concerts born out of the pandemic. As a software engineer there, I spent much of my time developing
                new APIs and refactoring and adding features to the main website. NoCap was hosted entirely on Google Cloud, and used
                Firestore and BigQuery extensively. Most of our sites and features were written in TypeScript on Node, with our web
                pages being made with NextJS and our APIs using ExpressJS. However, we also had APIs written in Python using Flask that handled show running duties.
            </Text>
            <br />
            <Text fontSize={props.fontSize}>
                While at NoCap, I wrote a comprehensive reporting Express API to track artist's ticket and merchandise sales
                and provide a suite of analytics on those sales. I also wrote a Flask API that was used to handle the creation and manipulation of
                HLS manifests from Mux, and I contributed heavily to rewriting the chat system used on the video player and other improvements
                throughout the main site.
            </Text>
        </React.Fragment>
    );
};

export default nocapText;