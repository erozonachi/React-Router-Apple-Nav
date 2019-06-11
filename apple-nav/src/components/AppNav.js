import React, { useState, useEffect, } from 'react';
import {BrowserRouter as Router, Route, } from 'react-router-dom';
import Nav from './StyledComponents/Nav';
import Link from './Link';
import NavWrapper from './StyledComponents/NavWrapper';

export default function AppNav(props) {

  const [links, setLinks] = useState(props.links);

  return (
    <NavWrapper>
      <Router>
        <Nav>
          {links.map(link => <Link link={link} />)}
        </Nav>
        <Route>
          <NavWrapper>
  {links.map(link => link.subLinks? <Nav>{link.subLinks.map(item => {
    item.id = `${link.id}/${item.id}`;
    return <Link link={item} />;
  })}</Nav> : null)}
          </NavWrapper>
        </Route>
      </Router>
    </NavWrapper>
  );
}