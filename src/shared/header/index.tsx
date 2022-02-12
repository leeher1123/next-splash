import styled from 'styled-components';

import SearchBox from '../searchBox';

const Header = () => (
  <Container>
    <Logo>뮤직큐</Logo>
    <SearchBox />
    <Nav>Nav</Nav>
  </Container>
);

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background-color: #101010;
`;

const Logo = styled.div`

`;

const Nav = styled.div`

`;

const NavLink = styled.div`

`;

export default Header;
