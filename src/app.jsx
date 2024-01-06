import React from 'react';
import {
  ChakraProvider,
  Container,
  extendTheme
} from '@chakra-ui/react';
import {
  createBrowserRouter,
  RouterProvider
}    from "react-router-dom";
import { useWindowSize } from './hooks/useWindowSize.js';
import TopBar from './web/topBar.jsx';
import AboutMe from './web/aboutme.jsx';
import Education from './web/education.jsx';
import Career from './web/career.jsx';
import Projects from './web/projects.jsx';

const App = () => {
  const {height, width} = useWindowSize();
  const router = createBrowserRouter([
    {
        path: '/',
        element: <AboutMe/>
    },
    {
        path: '/education',
        element: <Education/>
    },
    {
        path: '/career',
        element: <Career/>
    },
    {
        path: '/projects',
        element: <Projects/>
    }
  ]);
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
        minWidth={width}
        minHeight={height}
        backgroundImage= 'url("https://cloud.swrigdon.com/s/Bpnzzzrk7Qc469q/preview")'
        backgroundSize='cover'
      >
        <TopBar/>
        <RouterProvider router={router}/>
      </Container>
    </ChakraProvider>
  );
}

export default App;
