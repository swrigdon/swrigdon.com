import React from 'react';
import {
    Container,
} from '@chakra-ui/react';
import BodyText from '../components/AboutMe/bodyText';
import GreetingText from '../components/AboutMe/greetingText';

const AboutMe = () => {
    return(
        <Container maxW='66%' marginTop='12%'>
            <GreetingText fontSize="5.5em"/>
            <BodyText fontSize="1.5em"/>
        </Container>
    )
};

export default AboutMe;
