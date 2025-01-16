import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { CartContextProvider } from './contexts/CartProvider';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CartContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </CartContextProvider>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
