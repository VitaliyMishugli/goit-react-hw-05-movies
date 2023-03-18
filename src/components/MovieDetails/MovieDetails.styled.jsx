import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';

export const MovieInfoContainer = styled.div`
 display: flex;
 gap: 20px;
 margin-top: 20px;
 margin-bottom: 20px;
`;

export const TextInfoContainer = styled.div`
 margin: 0;
`;

export const AdditionalInfoContainer = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 5px
`;

export const NavItem = styled(NavLink)`
  margin: 10px 10px;
  padding: 3px;
  border-radius: 4px;
  text-decoration: none;
  color: blue;

  &.active{
    background-color: tomato;
    color: white
  }

  :hover:not(.active),
  :focus-visible:not(.active){
    color: tomato
  }
`;

export const BackBtnLink = styled(Link)`
text-decoration: none
`;