import React, { useContext } from 'react';

import { useRouter } from 'next/router';
import { Navbar, Nav, Toggle } from 'rsuite';

import { LocaleContext } from '@namespace/web-shared/contexts/LocaleContext';
import { dark, light, UiUxContext } from '@namespace/web-shared/contexts/UiUxContext';
import { en, ko } from '@namespace/web-shared/utils/intl-i18n';

import urls from '../../utils/urls';

const { home, template } = urls.inner;

export const localeStorageId = 'locale';

const TopNavBar = function () {
  const { currentLocale, updateLocale } = useContext(LocaleContext);
  const { uiTheme, updateUiTheme } = useContext(UiUxContext);
  const router = useRouter();

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
              checkedChildren={uiTheme}
              onChange={() => updateUiTheme(uiTheme === light ? dark : light)}
              size="lg"
              unCheckedChildren={uiTheme}
            />
          </div>
        </Nav>
        <Nav pullRight>
          <Nav.Menu title={currentLocale}>
            <Nav.Item onSelect={() => updateLocale(en)}>{en}</Nav.Item>
            <Nav.Item onSelect={() => updateLocale(ko)}>{ko}</Nav.Item>
          </Nav.Menu>
        </Nav>
      </Nav>
    </Navbar>
  );
};

export default TopNavBar;
