import React, { useState, useEffect, } from 'react';
import {BrowserRouter as Router, Route, } from 'react-router-dom';
import Nav from './StyledComponents/Nav';
import Link from './Link';
import NavWrapper from './StyledComponents/NavWrapper';

export default function AppNav(props) {
  const [active, setActive] = useState('');
  useEffect(() => {
    setActive(document.location.pathname);
  });
  return (
    <NavWrapper>
      <Router>
        <Nav>
          {props.navLinks.map(link => 
          <Link key={link.id} link={link} active={active.includes(link.id)? true : false} />)}
        </Nav>
        <NavWrapper>
          {props.navLinks.map(link => link.subLinks? 
          <Route key={link.id} path={`/${link.id}`} render={(props) => (
            <Nav darken={link.id === 'tv'? true : false}>{link.subLinks.map(item => <Link key={item.id} link={item} {...props} />)}</Nav>
          )} /> : null)}
        </NavWrapper>
      </Router>
    </NavWrapper>
  );
}