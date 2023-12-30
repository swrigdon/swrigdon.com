import React from 'react';
import {
  ChakraProvider,
  Container,
  extendTheme
} from '@chakra-ui/react';
import { useWindowSize } from './hooks/useWindowSize.js';
import ContentPane from './content/contentPane.jsx';
import TopBar from './topBar.jsx';

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
      <TopBar/>
      <ContentPane width={width} height={height}/>
    </ChakraProvider>
  );
}

export default App;
