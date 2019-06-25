import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const CollectionTemplate = props => {
  return (
    <Layout>
      <SEO
        keywords={[
          `Octatum`,
          `Web development`,
          `Desarrollo web`,
          'gatsby',
          'react',
        ]}
      />
      <Footer />
    </Layout>
  );
};

export default CollectionTemplate;
