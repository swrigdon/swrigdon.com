import React from 'react';
import {
  Box,
  chakra,
  Flex,
  Image,
  Link,
  Menu,
  MenuButton,
  IconButton,
  MenuItem,
  MenuList,
  Spacer,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

const MobileNavBar = () => {
    return(
        <chakra.header id="mobileHeader">
            <Flex
                w="100%"
                px="3"
                py="5"
                align="center"
                justify="space-between"
                boxShadow='10px'
                background='swrigdon.black'
            >
                <Box w="10%">
                    <Link
                        href="/"
                    >
                        <Image
                            src='https://cloud.swrigdon.com/s/oZnpWGtsZPTjpPC/preview'
                        />
                    </Link>
                </Box>
                <Spacer/>
                <Box>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Menu'
                            icon={<FontAwesomeIcon icon={faBars}/>}
                            color='white'
                            backgroundColor='swrigdon.black'
                        />
                        <MenuList backgroundColor='swrigdon.black'>
                            <MenuItem backgroundColor='swrigdon.black' color='white' href='/' as='a'>
                                Home
                            </MenuItem>
                            <MenuItem backgroundColor='swrigdon.black' color='white' href='/education' as='a'>
                                My Education
                            </MenuItem>
                            <MenuItem backgroundColor='swrigdon.black' color='white' href='/career' as='a'>
                                My Career
                            </MenuItem>
                            <MenuItem backgroundColor='swrigdon.black' color='white' href='/projects' as='a'>
                                My Projects
                            </MenuItem>
                            <MenuItem backgroundColor='swrigdon.black' color='white' href="https://docs.google.com/document/d/1fo_6aZ1ikzC2wWy5SYEKG37qytN1OPtyNMP9aAsPYFs/export?format=pdf" as='a' target='_blank'>
                                My Resume
                            </MenuItem>
                            <MenuItem backgroundColor='swrigdon.black' color='white' href='https://www.linkedin.com/in/swrigdon' as='a' target='_blank'>
                                My Linkedin
                            </MenuItem>
                            <MenuItem backgroundColor='swrigdon.black' color='white' href='https://www.github.com/swrigdon' as='a' target='_blank'>
                                My GitHub
                            </MenuItem>
                            <MenuItem backgroundColor='swrigdon.black' color='white' href='mailto:swrigdon@gmail.com' as='a'>
                                Email Me
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Flex>
        </chakra.header>    
    );
};


export default MobileNavBar;