import React from 'react';
import {
    Center,
    Container
} from '@chakra-ui/react';
import BodyText from '../components/AboutMe/bodyText';
import GreetingText from '../components/AboutMe/greetingText';

const AboutMe = () => {
    return(
        <Container maxW='95%' marginTop='25%'>   
            <Center>
                <GreetingText fontSize="2em"/>
            </Center>
            <br />
            <BodyText fontSize="1em"/>
        </Container>
    )
};

export default AboutMe;
