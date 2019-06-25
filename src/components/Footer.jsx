import React from 'react';
import { Box, Flex } from 'rebass';
import Text from './Text';

const FooterText = ({ children, ...rest }) => (
  <Text color="white" pb={4} {...rest}>
    {children}
  </Text>
);

function Footer() {
  return (
    <Flex bg="main" px={5} pt={5} pb={4}>
      <Box width={1 / 4}>
        <FooterText>Inicio</FooterText>
        <FooterText>Nosotros</FooterText>
        <FooterText>Contacto</FooterText>
      </Box>
      <Box width={1 / 4}>
        <FooterText>Facebook</FooterText>
        <FooterText>Instagram</FooterText>
      </Box>
      <Box width={2 / 4}>
        <FooterText textAlign="center" fontWeight="bold" pb={3}>
          Lemar Creaciones y Diseños S.A. de C.V.
        </FooterText>
        <Box
          style={{ borderTop: '1px solid white' }}
          width={0.5}
          mx="auto"
          pb={3}
        />
        <FooterText textAlign="center">
          Contáctanos en nuestro correo
        </FooterText>
        <FooterText textAlign="center">soporte@lemar.mx</FooterText>
      </Box>
    </Flex>
  );
}

export default Footer;
