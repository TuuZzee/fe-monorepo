import React from 'react';

import { useRouter } from 'next/router';
import { Navbar, Nav } from 'rsuite';

import urls from '../../utils/urls';

const { home, template } = urls.inner;

const TopNavBar = function () {
  const router = useRouter();

  return (
    <Navbar>
      <Nav>
        <Nav.Item onClick={() => router.push(home.path)}>Home</Nav.Item>
        <Nav.Item onClick={() => router.push(template.path)}>Template</Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default TopNavBar;
