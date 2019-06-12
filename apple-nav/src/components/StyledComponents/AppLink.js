import styled from 'styled-components';
import { NavLink, } from 'react-router-dom';

const AppLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.active? '#ccc' : 'inherit'};
  text-decoration: none;
  &:link, &:visited {
    color:inherit;
  }
  &:hover {
    color: #ccc;
  }

  img {
    max-height: 75px;
  }
`;

export default AppLink;
