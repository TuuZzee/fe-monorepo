import React from 'react';

import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import { Navbar, Nav, Dropdown } from 'rsuite';

import urls from '../../utils/urls';

const { home, template } = urls.inner;
const en = 'en';
const ko = 'ko';

export const localeStorageId = 'locale';

const TopNavBar = function ({ currentLocale, setCurrentLocale }) {
  const router = useRouter();

  return (
    <Navbar>
      <Nav>
        <Nav.Item onClick={() => router.push(home.path)}>Home</Nav.Item>
        <Nav.Item onClick={() => router.push(template.path)}>Template</Nav.Item>
      </Nav>
      <Nav pullRight>
        <Nav pullRight>
          <Dropdown title={currentLocale} trigger="click">
            <Dropdown.Item onSelect={() => setCurrentLocale(en)}>{en}</Dropdown.Item>
            <Dropdown.Item onSelect={() => setCurrentLocale(ko)}>{ko}</Dropdown.Item>
          </Dropdown>
        </Nav>
      </Nav>
    </Navbar>
  );
};

TopNavBar.propTypes = {
  currentLocale: PropTypes.string,
  setCurrentLocale: PropTypes.func,
};

TopNavBar.defaultProps = { currentLocale: '', setCurrentLocale: null };
export default TopNavBar;
