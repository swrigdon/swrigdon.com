import React from "react";
import { FontAwesomeIcon }              from "@fortawesome/react-fontawesome";
import { faEnvelope }                   from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin }   from "@fortawesome/free-brands-svg-icons";
import {
    chakra,
    Flex,
    Image,
    Link,
    Spacer,
    Tab,
    Tabs,
    TabList
  } from '@chakra-ui/react';

const TopBar = () =>{
    return(
        <chakra.header id="webHeader">
            <Flex
                w="100%"
                px="3"
                align="center"
                justify="space-between"
                backgroundColor='swrigdon.black'
                id="topbar"
            >
                <Image
                    src='https://cloud.swrigdon.com/s/oZnpWGtsZPTjpPC/preview'
                    w='5%'
                />
                <Tabs variant="unstyled">
                    <TabList>
                        <Tab color='white'>
                            <Link
                                href='/education'
                                _hover={{color: 'swrigdon.purple'}}
                            >
                                My Education
                            </Link>
                        </Tab>
                        <Tab color='white'>
                            <Link
                                href='/career'
                                _hover={{color: 'swrigdon.purple'}}
                            >
                                My Career
                            </Link>
                        </Tab>
                        <Tab color='white'>
                            <Link
                                href='/projectshome'
                                _hover={{color: 'swrigdon.purple'}}
                            >
                                My Projects
                            </Link>
                        </Tab>
                        <Tab color='white'>
                            <Link
                                target='_blank'
                                _hover={{color: 'swrigdon.purple'}}
                                href="https://docs.google.com/document/d/1fo_6aZ1ikzC2wWy5SYEKG37qytN1OPtyNMP9aAsPYFs/export?format=pdf"
                            >
                                My Resume
                            </Link>
                        </Tab>
                    </TabList>
                </Tabs>
                <Spacer/>
                <Tabs variant="unstyled" paddingRight='3%'>
                    <TabList>
                        <Tab color='white'>
                            <Link
                                target='_blank'
                                _hover={{color: 'swrigdon.purple'}}
                                href='https://www.linkedin.com/in/swrigdon'
                            >
                                <FontAwesomeIcon icon={faLinkedin} size="3x"/>
                            </Link>
                        </Tab>
                        <Tab color='white'>
                            <Link
                                target='_blank'
                                _hover={{color: 'swrigdon.purple'}}
                                href='https://www.github.com/swrigdon'
                            >
                                <FontAwesomeIcon icon={faGithubSquare} size="3x"/>
                            </Link>
                        </Tab>
                        <Tab color='white'>
                            <Link
                                target='_blank'
                                _hover={{color: 'swrigdon.purple'}}
                                href='mailto:swrigdon@gmail.com'
                            >
                                <FontAwesomeIcon icon={faEnvelope} size="3x"/>
                            </Link>
                        </Tab>
                    </TabList>
                </Tabs>
            </Flex>
        </chakra.header>    
    );
};

export default TopBar;
