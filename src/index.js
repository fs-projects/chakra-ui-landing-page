import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import customTheme from './customTheme';
import { ChakraProvider } from '@chakra-ui/react';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
