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
      <Footer>footer</Footer>
    </Container>
  );
}

const Container = styled.div`

`;

const Main = styled.div`
  padding: 64px 0 76px 240px;
  background: #121212;
  height: calc(100vh - 76px); // footer 부분으로 스크롤 내려가는 것 방지
  overflow: auto; // html 을 고정했기 때문에 이곳에서는 auto 로 스크롤이 생기도록 해야한다
`;

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 76px;
  background-image: linear-gradient(90deg,#af2896,#509bf5);
`;

export default MyApp;
