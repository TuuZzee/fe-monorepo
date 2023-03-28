import React from 'react';

import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import { Navbar, Nav, Dropdown, Toggle } from 'rsuite';

import urls from '../../utils/urls';

const { home, template } = urls.inner;
const en = 'en';
const ko = 'ko';
const dark = 'dark';
const light = 'light';

export const localeStorageId = 'locale';

const TopNavBar = function ({ currentLocale, setCurrentLocale, currentUiTheme, updateUiTheme }) {
  const router = useRouter();

  const handleThemeChange = () => {
    if (currentUiTheme === light) {
      updateUiTheme(dark);
    } else {
      updateUiTheme(light);
    }
  };
  return (
    <Navbar>
      <Nav>
        <Nav.Item onClick={() => router.push(home.path)}>Home</Nav.Item>
        <Nav.Item onClick={() => router.push(template.path)}>Template</Nav.Item>
      </Nav>
      <Nav pullRight>
        <Nav>
          <div style={{ marginTop: '14px' }}>
            <Toggle
              checkedChildren={currentUiTheme}
              onChange={handleThemeChange}
              size="lg"
              unCheckedChildren={currentUiTheme}
            />
          </div>
        </Nav>
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
  currentUiTheme: PropTypes.string.isRequired,
  updateUiTheme: PropTypes.func.isRequired,
};

TopNavBar.defaultProps = { currentLocale: '', setCurrentLocale: null };
export default TopNavBar;
