import React from "react";
import {
    Card,
    CardBody,
    Center,
    Container,
    Link,
    Image,
    Stack,
    Text
} from "@chakra-ui/react";

const Career = () => {
    const AmazonLogo = 
    <Link maxW="37%" href="https://flex.amazon.com" target="_blank">
        <Image src="https://cloud.swrigdon.com/s/wBt4Bc7i8PxRMen/preview"/>
    </Link>;
    const DisneyLogo = 
    <Link maxW="37%" href="https://disneyworld.disney.go.com" target="_blank">
        <Image src="https://cloud.swrigdon.com/s/o4NspG7yXHZdfHW/preview"/>
    </Link>;
    const NoCapLogo = 
    <Link maxW="37%" href="https://www.nocapshows.com" target="_blank">
        <Image src="https://cloud.swrigdon.com/s/S9xW3Hp5E3rHW6H/preview"/>
    </Link>;
    const OCLogo = 
    <Link maxW="37%" href="https://www.ocfl.net/" target="_blank">
        <Image src="https://cloud.swrigdon.com/s/Y8afn6DZ2A7RXxF/preview"/>
    </Link>;
    
    return(
        <Container
            minW="95%"
            marginTop="3%"
        >
            <Center>
                <Text fontSize="3em">
                    My Career
                </Text>
            </Center>
            <br />
            <Card paddingLeft="3%" paddingBottom="2.5%">
                <CardBody>
                    <Center>
                        <Text fontSize="2.5em">
                            Industry
                        </Text>
                    </Center>
                    <hr />
                    <Stack direction="column" paddingTop="2.5%">
                        <Center>
                            {AmazonLogo}
                        </Center>
                        <Container minWidth="85%">
                            <Text fontSize="1.5em">
                                Amazon - Software Development Engineer II (Sep 2022 - Present)
                            </Text>
                            <br />
                            <Text>
                                At Amazon, I am currently on the Flex Altitude Compliance team. Our goal is to maintain
                                legal compliance regarding Amazon Flex gig-work drivers in whatever geographic areas they
                                operate in. We have a serverless architecture hosted entirely in AWS using AWS products such as
                                Lambda functions, DynamoDB tables, SQS queues, SNS topics, Glue jobs, and CloudFormation stacks.
                                I have used primarily Java at Amazon, though I have also used Python for reporting scripting and
                                Typescript with the CDK and with a React UI we built for support agents to use when helping Flex drivers.
                            </Text>
                            <br />
                            <Text>
                                Some of the work I have done on my team at Amazon includes refatoring the compliance team's flagship monolithic
                                product into separate microservices, and contributing to a new initiative regarding increased route transparency
                                to Flex drivers in the city of Seattle.
                            </Text>
                        </Container>
                    </Stack>
                    <hr />
                    <Stack direction="column" marginTop="5%">
                        <Center>
                            {NoCapLogo}
                        </Center>
                        <Container minWidth="85%">
                            <Text fontSize="1.5em">
                                NoCap Live, LLC - Software Engineer (Aug 2021 - Sep 2022)
                            </Text>
                            <br />
                            <Text>
                                NoCap was a Series A startup that focused on partnering with artists to livestream shows and create
                                virtual concerts born out of the pandemic. As a software engineer there, I spent much of my time developing
                                new APIs and refactoring and adding features to the main website. NoCap was hosted entirely on Google Cloud, and used
                                Firestore and BigQuery extensively. Most of our sites and features were written in TypeScript on Node, with our web
                                pages being made with NextJS and our APIs using ExpressJS. However, we also had APIs written in Python using Flask that handled show running duties.
                            </Text>
                            <br />
                            <Text>
                                While at NoCap, I wrote a comprehensive reporting Express API to track artist's ticket and merchandise sales
                                and provide a suite of analytics on those sales. I also wrote a Flask API that was used to handle the creation and manipulation of
                                HLS manifests from Mux, and I contributed heavily to rewriting the chat system used on the video player and other improvements
                                throughout the main site.
                            </Text>
                        </Container>
                    </Stack>
                    <hr />
                    <Stack direction="column" marginTop="5%">
                        <Center>
                            {DisneyLogo}                        
                        </Center>
                        <Container minWidth="85%">
                            <Text fontSize="1.5em">
                                Disney - System Development and Sustainment Analyst (Feb 2020 - Aug 2021)
                            </Text>
                            <br />
                            <Text>
                                While at Disney, I worked for the Systems Integration team at the Disney Reservation Center.
                                The goal of my team was to provide solutions both from vendors and made in-house to assist phone
                                agents at the reservation center that helped guests book everthing from park visits, to hotel stays,
                                to conventions, to cruises. Our web applications were largely hosted on SharePoint 2013, and we largely used
                                JavaScript with jQuery and TypeScript, with some occasional Powershell.
                            </Text>
                            <br />
                            <Text>
                                While employed at Disney I led the creation of several high-impact web applications, such as
                                a cancellation tracking application used by executive leadership throughout Walt Disney World at
                                the onset of the pandemic, an application to handle the employee annual reviews of the phone agents, which had been
                                a manual process before the pandemic, a redesign of the reservation center's agent quality assurance tracking
                                application, and a TypeScritp API to facilitate data transfer between all of my team's web applications so that we
                                could begin the process of migrating away from SharePoint.
                            </Text>
                        </Container>
                    </Stack>
                    <Center>
                        <Text fontSize="2.5em" marginTop="2.5%">
                            Internships
                        </Text>
                    </Center>
                    <hr />
                    <Stack direction="column" paddingTop="2.5%">
                        <Center>
                            {DisneyLogo}                        
                        </Center>
                        <Container minWidth="85%">
                            <Text fontSize="1.5em">
                                Disney - Web Development Intern (May 2019 - Feb 2020)
                            </Text>
                            <br />
                            <Text>
                                While an intern the second time at Disney, I worked for the Systems Integration team at
                                the Disney Reservation Center. My primary focus was on shoring up my team's
                                operation processes. This includes incorporating legacy products into version control via
                                GitLab, and creating templates and processes for full CI/CD for all new applications via
                                GitLab Runners and Jenkins. During this intership I also wrote the Reservation Center's first
                                React applications, and created robust custom application templates to give my team's developers a codebase
                                to start upon.
                            </Text>
                        </Container>
                    </Stack>
                    <hr />
                    <Stack direction="column" marginTop="5%">
                        <Center>
                            {DisneyLogo}                        
                        </Center>
                        <Container minWidth="85%">
                            <Text fontSize="1.5em">
                                Disney - System Integration Intern (Jun 2017 - Jun 2018)
                            </Text>
                            <br />
                            <Text>
                                While an intern the first time at Disney, I worked for the Systems Integration team at the
                                Disney Reservation Center. My task was to develop and application to automate and enhance
                                the very manual process of onboarding and offboarding phone agents. Using a mixture of SharePoint 2013,
                                Nintex Workflows on top of the SharePoint workflow engine, and jQuery on the front end, I was able to work
                                with my fellow intern and produce a prototype of the application. 
                            </Text>
                        </Container>
                    </Stack>
                    <hr />
                    <Stack direction="column" marginTop="5%">
                        <Center>
                            {OCLogo}                        
                        </Center>
                        <Container minWidth="85%">
                            <Text fontSize="1.5em">
                                Orange County, FL Government - Student Intern (Sep 2015 - Apr 2016)
                            </Text>
                            <br />
                            <Text>
                                While an intern for Orange County, I was primarily responsible for maintaining the county's
                                website and intranet portal. This was done primarily via HTML and CSS in the context of a
                                DNN CMS. I also tested and contributed to the new replacement intranet portal, which was
                                created in SharePoint 2013.
                            </Text>
                        </Container>
                    </Stack>
                </CardBody>
            </Card>
        </Container>
    );
}

export default Career;