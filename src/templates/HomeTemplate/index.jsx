import React from 'react';

import { Box, Flex } from 'rebass';
import SEO from '../../components/SEO';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import Text from '../../components/Text';
import Contact from './Contact';
import Button from '../../components/Button';
import { Link } from 'gatsby';

const HomeTemplate = props => {
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
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-end"
        bg="black"
        py={4}
        style={{ minHeight: 400 }}
      >
        <Text color="white" fontSize={5} width={0.3} pb={4} textAlign="center">
          Conoce nuestra Colección de Verano 2019
        </Text>
        <Button as={Link} to="/coleccion" fontWeight="normal">
          Descubrir la colección
        </Button>
      </Flex>
      <Flex
        flexDirection={['column', 'column', 'row']}
        style={{ minHeight: 400 }}
      >
        <Box width={[1, 1, 1 / 3]} bg="MintCream" p={[6, 5, 3]}>
          <Text fontSize={5} color="white">
            Hello
          </Text>
        </Box>
        <Box width={[1, 1, 1 / 3]} bg="AliceBlue" p={[6, 5, 3]}>
          <Text fontSize={5} color="white">
            Hello
          </Text>
        </Box>
        <Box width={[1, 1, 1 / 3]} bg="Ivory" p={[6, 5, 3]}>
          <Text fontSize={5} color="white">
            Hello
          </Text>
        </Box>
      </Flex>
      <Flex justifyContent="center" alignItems="center" py={4}>
        <Button as={Link} to="/coleccion">
          Ver más
        </Button>
      </Flex>
      <Flex>
        {[1, 2, 3].map(item => (
          <Box bg="Linen" width={1 / 3} pb={8} key={item} />
        ))}
      </Flex>
      <Box bg="white" pb={5} style={{ borderBottom: '1px solid black' }}>
        <Flex>
          {[1, 2, 3, 4].map(item => (
            <Box bg="main" pb={5} width={0.25} key={item}>
              <Box bg="gray" pb={7} />
            </Box>
          ))}
        </Flex>
      </Box>
      <Box bg="gray" pb={3}>
        <Contact />
      </Box>
      <Footer />
    </Layout>
  );
};

export default HomeTemplate;
