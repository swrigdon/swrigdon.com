import React from "react";
import {
    Text
} from "@chakra-ui/react"

const disneyText4 = (props) => {
    return(
        <React.Fragment>
            <Text fontSize={props.headingFontSize}>
                Disney Streaming - Software Engineer II (Aug 2024 - Present)
            </Text>
            <br />
            <Text fontSize={props.fontSize}>
                Currently I am a Software Engineer II for Disney Streaming, working on the HiVE (HTML Video Engine) team.
                This team is responsible for building the HLS HTML5 player for Disney that runs on Disney Streaming websites, as well as
                all browser-based devices. This includes TVs from Samsung, LG, Vizio, Hisense, Toshiba, and Panasonic, as well as Chromecast
                devices and various cable boxes around the world.
                <br />
                <br />
                While here I have been mostly focusing on making comprehensive improvements to the team's
                testing harness, as well as extensive testing and some bug fixes for the latest version of the player when launching to Disney+.
            </Text>
        </React.Fragment>
    );
};

export default disneyText4;