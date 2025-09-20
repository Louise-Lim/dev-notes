import React from 'react';
import {useMetadata} from '@docusaurus/theme-common';

function LastUpdateInfo() {
  const metadata = useMetadata();
  const {lastUpdatedAt, lastUpdatedBy} = metadata;

  return (
    <div>
      <p>Last Updated Time: {new Date(lastUpdatedAt * 1000).toLocaleDateString()}</p>
      <p>Last Updated By: {lastUpdatedBy}</p>
    </div>
  );
}

export default LastUpdateInfo;
