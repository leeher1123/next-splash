import Link from 'next/link';
import styled from 'styled-components';

const SideMenu = () => (
  <Container>
    <h1>splash</h1>
    <Link href="/">
      <NavLink>홈</NavLink>
    </Link>
    <Link href="/photos">
      <NavLink>사진 검색하기</NavLink>
    </Link>
  </Container>
);

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 240px;
  background: #070707;
  color: #fff;
  padding-bottom: 76px;
  h1 {
    font-size: 22px;
    text-align: center;
    padding: 20px 0;
    margin-bottom: 30px;
  }
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 14px;
  height: 40px;
  padding: 0 20px;
  opacity: .7;
  transition: .4s;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

export default SideMenu;
