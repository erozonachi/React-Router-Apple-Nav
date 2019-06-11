import styled from 'styled-components';
import { NavLink, } from 'react-router-dom';

const AppLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  &:link, &:visited {
    color:inherit;
  }
`;

export default AppLink;
