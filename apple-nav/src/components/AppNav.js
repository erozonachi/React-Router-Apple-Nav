import React, { useState, useEffect, } from 'react';
import {BrowserRouter as Router, Route, } from 'react-router-dom';
import Nav from './StyledComponents/Nav';
import Link from './Link';
import NavWrapper from './StyledComponents/NavWrapper';

export default function AppNav(props) {

  return (
    <NavWrapper>
      <Router>
        <Nav>
          {props.navLinks.map(link => <Link link={link} />)}
        </Nav>
          <NavWrapper>
  {props.navLinks.map(link => link.subLinks? <Route path={`/${link.id}`} render={(props) => (
    <Nav>{link.subLinks.map(item => <Link link={item} {...props} />)}</Nav>
  )} /> : null)}
          </NavWrapper>
      </Router>
    </NavWrapper>
  );
}