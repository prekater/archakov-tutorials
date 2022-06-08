import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className="header">
      <Link to="/">
        <h2>React Blog</h2>
      </Link>

      <Nav variant="pills">
        <Nav.Item>
          <Nav.Link to="/" as={Link} active={pathname === '/'}>
            Главная
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/about" as={Link} active={pathname === '/about'}>
            Обо мне
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/login" as={Link} active={pathname === '/login'}>
            Вход
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};
