import React, { useContext } from 'react';

import { ServiceContext } from '../../contexts/ServiceContext';

import { EnvBadgeBlock, EnvBadgeMessage } from './styled';

const EnvironmentBadge = function () {
  const { contextServiceDetails } = useContext(ServiceContext);

  return (
    process.env.NEXT_PUBLIC_APP_ENV !== 'production' && (
      <EnvBadgeBlock>
        <EnvBadgeMessage type="error">{`[${contextServiceDetails.name}] - [${process.env.NEXT_PUBLIC_APP_ENV}]`}</EnvBadgeMessage>
      </EnvBadgeBlock>
    )
  );
};

export default EnvironmentBadge;
