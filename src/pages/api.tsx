import React from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';

function SwaggerUI() {
  return (
    <BrowserOnly>
      {() => (
        <iframe
          src="http://18.188.102.128:5000/apidocs/"
          className="swagger-frame"
          title="API Documentation"
        />
      )}
    </BrowserOnly>
  );
}

export default function APIDoc(): React.ReactElement {
  return (
    <Layout
      title="API Documentation"
      description="Thunder Buddy API Documentation">
      <SwaggerUI />
    </Layout>
  );
} 