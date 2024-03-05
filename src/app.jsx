import React from 'react';
import {
  ChakraProvider,
  Center,
  Container,
  extendTheme,
  Show
} from '@chakra-ui/react';
import { useWindowSize } from './hooks/useWindowSize.js';
import TopBar from './web/topBar.jsx';
import MobileTopBar from './mobile/topBar.jsx';
import AboutMe from './web/aboutme.jsx';
import MobileAboutMe from './mobile/aboutme.jsx'
import Career from './web/career.jsx';
import MobileCareer from './mobile/career.jsx'
import Projects from './web/projects.jsx';
import MobileProjects from './mobile/projects.jsx'
import Education from './web/education.jsx';
import MobileEducation from './mobile/education.jsx';

const App = () => {
  const {height, width} = useWindowSize();
  const theme = extendTheme({
    colors: {
      swrigdon: {
        purple: '#800080',
        black: '#333333'
      }
    }
  });

  return (
    <ChakraProvider theme={theme}>
      <Container
        margin='0'
        padding='0'
        paddingBottom='2.5%'
        minWidth={width}
        minHeight={height}
        backgroundImage= 'url("https://cloud.swrigdon.com/s/Bpnzzzrk7Qc469q/preview")'
        backgroundSize='cover'
        fontFamily="Ubuntu Mono, monospace"
      >
        <Show breakpoint='(min-width: 1000px)'>
          <TopBar/>
        </Show>
        <Show breakpoint='(max-width: 999px)'>
          <MobileTopBar/>
        </Show>
        <Show breakpoint='(min-width: 1000px)'>
          <AboutMe/>
        </Show>
        <Show breakpoint='(max-width: 999px)'>
          <MobileAboutMe/>
        </Show>
      </Container>
      <Show breakpoint='(min-width: 1000px)'>
          <Education/>
      </Show>
      <Show breakpoint='(max-width: 999px)'>
          <MobileEducation/>
      </Show>
      <Show breakpoint='(min-width: 1000px)'>
          <Career/>
      </Show>
      <Show breakpoint='(max-width: 999px)'>
        <MobileCareer/>
      </Show>
      <Show breakpoint='(min-width: 1000px)'>
          <Projects/>
      </Show>
      <Show breakpoint='(max-width: 999px)'>
        <MobileProjects/>
      </Show>
      <footer>
        <Center
          fontFamily="Ubuntu Mono, monospace"
          paddingTop="1%"
        >
          Stephen W Rigdon, {new Date().getFullYear()}
        </Center>
      </footer>
    </ChakraProvider>
  );
}

export default App;
