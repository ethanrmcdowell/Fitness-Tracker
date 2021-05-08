import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';

const Header = () => {
  return (
    <Navbar>
      <Navbar.Brand>Fitness Tracker</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='justify-content-end'>
        <Navbar.Text>
          <Link to='/'>Home</Link>
        </Navbar.Text>
        <Navbar.Text>
          <Link to='/login'>Login</Link>
        </Navbar.Text>
        <Navbar.Text>
          <Link to='/dashboard'>Dashboard</Link>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
