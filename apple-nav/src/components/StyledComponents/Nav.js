import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  width: 100%;
  padding: 10px 0;
  background-color: #111;
  color: #fff;
  &:last-of-type {
    background-color: ${(props) => props.darken? '#000' : '#eee'};
    color: ${(props) => props.darken? '#fff' : '#111'};
  }
`;

export default Nav;
