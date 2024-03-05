import React from "react";
import {
    Text
} from "@chakra-ui/react"

const amazonText = (props) => {
    return(
        <React.Fragment>
            <Text fontSize={props.headingFontSize}>
                Amazon - Software Development Engineer II (Sep 2022 - Present)
            </Text>
            <br />
            <Text fontSize={props.fontSize}>
                At Amazon, I am currently on the Flex Altitude Compliance team. Our goal is to maintain
                legal compliance regarding Amazon Flex gig-work drivers in whatever geographic areas they
                operate in. We have a serverless architecture hosted entirely in AWS using AWS products such as
                Lambda functions, DynamoDB tables, SQS queues, SNS topics, Glue jobs, and CloudFormation stacks.
                I have used primarily Java at Amazon, though I have also used Python for reporting scripts, and
                TypeScript with the CDK and with a React UI we built for support agents to use when helping Flex drivers.
            </Text>
            <br />
            <Text fontSize={props.fontSize}>
                Some of the work I have done on my team at Amazon includes refactoring the compliance team's flagship monolithic
                product into separate microservices, and contributing to a new initiative regarding increased route transparency
                to Flex drivers in the city of Seattle.
            </Text>
        </React.Fragment>
    );
};

export default amazonText;