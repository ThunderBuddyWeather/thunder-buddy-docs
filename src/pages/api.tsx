import React from 'react';
import Layout from '@theme/Layout';
import useIsBrowser from '@docusaurus/useIsBrowser';

function SwaggerUI() {
  const isBrowser = useIsBrowser();
  
  return isBrowser ? (
    <iframe
      src="http://18.188.102.128:5000/apidocs/"
      className="swagger-frame"
      title="API Documentation"
    />
  ) : null;
}

export default function APIDoc(): React.ReactElement {
  return (
    <Layout
      title="API Documentation"
      description="Thunder Buddy API Documentation"
      wrapperClassName="apiPage">
      <SwaggerUI />
    </Layout>
  );
} 