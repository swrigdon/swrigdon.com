import React from 'react';
import {
    Text
} from '@chakra-ui/react';
import differenceInYears    from "date-fns/differenceInYears";

const bodyText = (props) => {
    const calulateAge = () =>{
        const now = Date.now();
        const birthDate = new Date(1996, 7, 17);
        return differenceInYears(now, birthDate);
    };
    const calculateYOE = () => {
        const now = Date.now();
        const workStart = new Date(2020, 1, 20);
        // Offset years 
        return Math.floor(differenceInYears(now, workStart) + 2.5);
    };

    return(
        <React.Fragment>
            <Text fontSize={props.fontSize}>
                Welcome to my personal website! I am a {calulateAge()} year old software engineer. I have over {calculateYOE()} years of
                experience working for companies ranging from seed-round startups to Fortune 50 entertainment giants and FAANG companies. 
                Feel free to take a look around this site to learn more about me, or feel free to reach out to me via LinkedIn, GitHub, or Email. 
            </Text>
            <br />
            <br />
            <Text fontSize={props.fontSize}>
                Thanks for dropping by!
            </Text>
        </React.Fragment>
    );
};

export default bodyText;
