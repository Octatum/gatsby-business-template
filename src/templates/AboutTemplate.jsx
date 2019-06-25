import React from 'react';
import { Box, Flex } from 'rebass';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const AboutTemplate = props => {
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
      <Box pt={8} pb={6} bg="#333" />
      <Box bg="green" pt={7} pb={5} />
      <Box bg="white" pt={7} pb={5} />
      <Flex>
        <Box pt={8} pb={6} width={0.5} />
        <Box pt={8} pb={6} bg="gray" width={0.5} />
      </Flex>
      <Footer />
    </Layout>
  );
};

export default AboutTemplate;
