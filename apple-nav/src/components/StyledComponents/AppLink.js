import styled from 'styled-components';
import { NavLink, } from 'react-router-dom';

const AppLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: inherit;
  text-decoration: none;
  &:link, &:visited {
    color:inherit;
  }

  img {
    max-height: 75px;
  }
`;

export default AppLink;
