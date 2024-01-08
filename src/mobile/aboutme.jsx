import React from 'react';
import {
    Center,
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
        <Container maxW='95%' marginTop='25%'>
            <Center>
                <Text
                    fontSize='2em'
                >
                    Howdy! I'm Stephen.
                </Text>
            </Center>
            <br />
            <Text fontSize='1em'>
                Welcome to my personal website! I am a {calulateAge()} year old software engineer. I have over {calculateYOE()} years of
                experience in industry, with an additional 2.5 years of internship experience. I have worked for companies ranging
                from seed-round startups to Fortune 50 entertainment giants and FAANG companies. Feel free to take a look around
                this site to learn more about me, or feel free to reach out to me via LinkedIn, GitHub, or Email. 
            </Text>
            <br />
            <br />
            <Text fontSize='1em'>
                Thanks for dropping by!
            </Text>
            </Container>
    )
};

export default AboutMe;
