import React from 'react';
import {
  ChakraProvider,
  Container,
  extendTheme,
  Show
} from '@chakra-ui/react';
import {
  createBrowserRouter,
  RouterProvider
}    from "react-router-dom";
import { useWindowSize } from './hooks/useWindowSize.js';
import TopBar from './web/topBar.jsx';
import MobileTopBar from './mobile/topBar.jsx';


const App = () => {
  const {height, width, aboutMeComponent, educationComponent, careerComponent, projectsComponent} = useWindowSize();
  const router = createBrowserRouter([
    {
        path: '/',
        element: aboutMeComponent
    },
    {
        path: '/education',
        element: educationComponent
    },
    {
        path: '/career',
        element: careerComponent
    },
    {
        path: '/projects',
        element: projectsComponent
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
        fontFamily="Ubuntu Mono, monospace"
      >
        <Show breakpoint='(min-width: 811px)'>
          <TopBar/>
        </Show>
        <Show breakpoint='(max-width: 810px)'>
          <MobileTopBar/>
        </Show>
        <RouterProvider router={router}/>
      </Container>
    </ChakraProvider>
  );
}

export default App;
