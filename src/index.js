import React              from 'react';
import ReactDOM           from 'react-dom';
import { ChakraProvider } from "@chakra-ui/react";
import { HashRouter }     from "react-router-dom";
import App                from './App.jsx';
import "./css/index.css";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter
      basename = "/"
    >
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
