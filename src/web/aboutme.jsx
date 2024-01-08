import React from 'react';
import {
    Container,
    Text
} from '@chakra-ui/react';
import differenceInYears    from "date-fns/differenceInYears";

const AboutMe = () => {
    const calulateAge = () =>{
        const now = Date.now();
        const birthDate = new Date(1996, 8, 17);
        return differenceInYears(now, birthDate);
    };
    const calculateYOE = () => {
        const now = Date.now();
        const workStart = new Date(2020, 2, 20);
        return differenceInYears(now, workStart);
    }

    return(
        <Container maxW='66%' marginTop='12%'>
            <Text
                fontSize='5.5em'
            >
                Howdy! I'm Stephen.
            </Text>
            <Text fontSize='1.5em'>
                Welcome to my personal website! I am a {calulateAge()} year old software engineer. I have over {calculateYOE()} years of
                experience in industry, with an additional 2.5 years of internship experience. I have worked for companies ranging
                from seed-round startups to Fortune 50 entertainment giants and FAANG companies. Feel free to take a look around
                this site to learn more about me, or feel free to reach out to me via LinkedIn, GitHub, or Email. 
            </Text>
            <br />
            <br />
            <Text fontSize='1.5em'>
                Thanks for dropping by!
            </Text>
        </Container>
    )
};

export default AboutMe;
