import React, { FC } from 'react';

import AuthenticatedContent from '../../src/components/shared/AuthenticatedContent';
import Layout from '../../src/components/shared/Layout';
import Template from '../../src/components/Template';
import wordingPage from '../../src/locale/template';

const TemplatePage: FC = function () {
  return (
    <Layout wordingPage={wordingPage}>
      <AuthenticatedContent>
        <Template />
      </AuthenticatedContent>
    </Layout>
  );
};

export default TemplatePage;
