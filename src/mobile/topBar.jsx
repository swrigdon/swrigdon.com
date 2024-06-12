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
                top="0px"
                w="100%"
                px="3"
                align="center"
                justify="space-between"
                boxShadow='10px'
                background='swrigdon.black'
                as="header"
            >
                <Box w="15%">
                    <Link
                        href="/"
                    >
                        <Image
                            src='https://cloud.swrigdon.com/s/WBZKTByPtkj9wPG/preview'
                        />
                    </Link>
                </Box>
                <Spacer/>
                <Box>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Menu'
                            icon={<FontAwesomeIcon icon={faBars} size='1x'/>}
                            color='white'
                            backgroundColor='swrigdon.black'
                        />
                        <MenuList backgroundColor='swrigdon.black'>
                            <MenuItem backgroundColor='swrigdon.black' color='white' href='/' as='a'>
                                Home
                            </MenuItem>
                            <MenuItem backgroundColor='swrigdon.black' color='white' href='#education' as='a'>
                                Education
                            </MenuItem>
                            <MenuItem backgroundColor='swrigdon.black' color='white' href='#career' as='a'>
                                Career
                            </MenuItem>
                            <MenuItem backgroundColor='swrigdon.black' color='white' href='#projects' as='a'>
                                Projects
                            </MenuItem>
                            <MenuItem backgroundColor='swrigdon.black' color='white' href="https://docs.google.com/document/d/1vxK_5hi0gS5F5NQyiJArUymeh3hd_wBjEYYiusOcsXc/export?format=pdf" as='a' target='_blank'>
                                Resume
                            </MenuItem>
                            <MenuItem backgroundColor='swrigdon.black' color='white' href='https://www.linkedin.com/in/swrigdon' as='a' target='_blank'>
                                Linkedin
                            </MenuItem>
                            <MenuItem backgroundColor='swrigdon.black' color='white' href='https://www.github.com/swrigdon' as='a' target='_blank'>
                                GitHub
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