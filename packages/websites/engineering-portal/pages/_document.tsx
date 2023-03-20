import React, { ReactElement } from 'react';

import Document, { DocumentContext, DocumentInitialProps } from 'next/document';

import SharedDocument, {
  pageDocumentsGetInitialProps,
} from '@namespace/web-shared/nextJs/SharedDocument';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    return pageDocumentsGetInitialProps(ctx, Document);
  }

  render(): ReactElement {
    const linksContent = (
      <>
        <link href="/manifest.json" rel="manifest" />
        <link href="/favicon.ico" rel="icon" />
      </>
    );

    return <SharedDocument links={linksContent} />;
  }
}
