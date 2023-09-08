import '@fontsource/quicksand/700.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';

import App from './app.tsx';
import { theme } from '@/theme';
import ErrorContextProvider from './contexts/error-context/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorContextProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </ErrorContextProvider>
  </StrictMode>,
);
