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
                <Link
                    w="3.5%"
                    padding="0"
                    href="/"
                >
                    <Image
                        src='https://cloud.swrigdon.com/s/WBZKTByPtkj9wPG/preview'
                    />
                </Link>
                <Tabs variant="unstyled">
                    <TabList>
                        <Tab color='white'>
                            <Link
                                href='#education'
                                _hover={{color: 'swrigdon.purple'}}
                            >
                                Education
                            </Link>
                        </Tab>
                        <Tab color='white'>
                            <Link
                                href='#career'
                                _hover={{color: 'swrigdon.purple'}}
                            >
                                Career
                            </Link>
                        </Tab>
                        <Tab color='white'>
                            <Link
                                href='#projects'
                                _hover={{color: 'swrigdon.purple'}}
                            >
                                Projects
                            </Link>
                        </Tab>
                        <Tab color='white'>
                            <Link
                                target='_blank'
                                _hover={{color: 'swrigdon.purple'}}
                                href="https://www.dropbox.com/scl/fi/z6w6jc4uwgochcf2bvymn/Stephen_Rigdon_Resume.pdf?rlkey=9u6h5r1efybntoz2qvr4039m4&st=os3wk9p0&dl=0"
                            >
                                Resume
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
                                <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                            </Link>
                        </Tab>
                        <Tab color='white'>
                            <Link
                                target='_blank'
                                _hover={{color: 'swrigdon.purple'}}
                                href='https://www.github.com/swrigdon'
                            >
                                <FontAwesomeIcon icon={faGithubSquare} size="2x"/>
                            </Link>
                        </Tab>
                        <Tab color='white'>
                            <Link
                                target='_blank'
                                _hover={{color: 'swrigdon.purple'}}
                                href='mailto:swrigdon@gmail.com'
                            >
                                <FontAwesomeIcon icon={faEnvelope} size="2x"/>
                            </Link>
                        </Tab>
                    </TabList>
                </Tabs>
            </Flex>
        </chakra.header>    
    );
};

export default TopBar;
