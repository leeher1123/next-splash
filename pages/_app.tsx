import type { AppProps } from 'next/app';
import styled from 'styled-components';

import Header from '../src/shared/header';
import { GlobalStyle } from '../src/styles/GlobalStyle';
import SideMenu from '../src/shared/sidemenu';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <SideMenu />
      <Main>
        <Component {...pageProps} />
      </Main>
      <footer>footer</footer>
    </Container>
  );
}

const Container = styled.div`

`;

const Main = styled.div`

`;

export default MyApp;
