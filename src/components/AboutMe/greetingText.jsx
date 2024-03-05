import React from 'react';
import {
    Text
} from '@chakra-ui/react';

const greetingText = (props) => {
    return(
        <Text fontSize={props.fontSize}>
            Howdy! I'm Stephen.
        </Text>
    )
};

export default greetingText;