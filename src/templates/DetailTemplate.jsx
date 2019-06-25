import React from 'react';
import { Box, Flex } from 'rebass';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const DetailTemplate = props => {
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
      <Box pb={8} bg="lightsalmon" />
      <Box pb={8} bg="peachpuff" />
      <Flex>
        <Box width={0.5} pb={8} pt={6} bg="MistyRose" />
        <Box width={0.5} pb={8} pt={6} bg="navajowhite" />
      </Flex>
      <Flex>
        <Box width={0.5} pb={8} bg="lightsalmon" />
        <Box width={0.5} pb={8} bg="peachpuff" />
      </Flex>
      <Box pb={8} bg="MistyRose" />
      <Footer />
    </Layout>
  );
};

export default DetailTemplate;
