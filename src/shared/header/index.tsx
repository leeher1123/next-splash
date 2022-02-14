import styled from 'styled-components';

import { useRouter } from 'next/router';

import SearchBox from '../searchBox';

const Header = () => {
  const { pathname } = useRouter();
  const isSearch = pathname.startsWith('/photos');
  return (
    <Container>
      {
        isSearch && <SearchBox />
      }
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 240px;
  right: 0;
  height: 64px;
  background-color: #070707;
  padding: 0 30px;
`;

export default Header;
