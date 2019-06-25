import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';
import { Link } from 'gatsby';
import Logo from '../assets/logo.svg';
import { RebassLink } from './Text';

const Container = styled(Box)`
  position: fixed;
  top: 0;
  z-index: 1;
  transition: all 0.4s;
`;

const StyledFlex = styled(Flex)`
  max-width: 1300px;
  box-sizing: content-box;
  transition: 150ms ease all;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const Navbar = () => {
  const [top, setTop] = useState(true);

  useEffect(() => {
    window.onscroll = () => {
      setTop(window.pageYOffset === 0);
    };

    return () => {
      window.onscroll = null;
    };
  });

  return (
    <Container width={1} bg="transparent">
      <StyledFlex
        mx="auto"
        px={[3, 3, 5]}
        py={[3, 3, 5]}
        justifyContent="space-between"
      >
        <Box>
          <Link style={{ display: 'block' }} to="/">
            <Image alt="Simple logo" src={Logo} />
          </Link>
        </Box>
        <Box>
          <Flex alignItems="center" style={{ height: '100%' }}>
            <RebassLink color="white" pl={4} fontSize={3} to="/">
              Inicio
            </RebassLink>
            <RebassLink color="white" pl={4} fontSize={3} to="/nosotros">
              Nosotros
            </RebassLink>
            <RebassLink color="white" pl={4} fontSize={3} to="/coleccion">
              Colección
            </RebassLink>
            <RebassLink color="white" pl={4} fontSize={3} to="/#contacto">
              Contacto
            </RebassLink>
          </Flex>
        </Box>
      </StyledFlex>
    </Container>
  );
};

export default Navbar;
