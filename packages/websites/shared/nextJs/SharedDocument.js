import React from 'react';

import { Html, Head, Main, NextScript } from 'next/document';
import PropTypes from 'prop-types';

import { ServerStyleSheet } from 'styled-components';

export const pageDocumentsGetInitialProps = async (ctx, Document) => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    // eslint-disable-next-line no-param-reassign
    ctx.renderPage = () =>
      originalRenderPage({
        // eslint-disable-next-line react/jsx-props-no-spreading
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
      });
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    };
  } finally {
    sheet.seal();
  }
};

const DocumentContainer = function ({ cssImports, links }) {
  return (
    <Html lang="en">
      <Head>
        {/* Links */}
        {links}
        {/* CSS imports */}
        {cssImports}
      </Head>
      <body>
        <a className="skip-link" href="#main">
          Skip to main
        </a>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

DocumentContainer.propTypes = {
  cssImports: PropTypes.oneOfType([PropTypes.shape([]), PropTypes.shape({}), PropTypes.node]),
  links: PropTypes.oneOfType([PropTypes.shape([]), PropTypes.shape({}), PropTypes.node]),
};

DocumentContainer.defaultProps = { cssImports: null, links: null };

export default DocumentContainer;
