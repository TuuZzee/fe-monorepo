import React from 'react';

import Document from 'next/document';

import SharedDocument, {
  pageDocumentsGetInitialProps,
} from '@namespace/web-shared/nextJs/SharedDocument';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    return pageDocumentsGetInitialProps(ctx, Document);
  }

  render() {
    const linksContent = (
      <>
        <link href="/manifest.json" rel="manifest" />
        <link href="/favicon.ico" rel="icon" />
      </>
    );

    return <SharedDocument links={linksContent} />;
  }
}
