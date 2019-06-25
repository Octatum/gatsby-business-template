import React from 'react';
import { Text as RebassText } from 'rebass';
import Markdown from 'react-markdown';
import styled from 'styled-components';
import GatsbyLink from 'gatsby-link';

function Text(props) {
  return <RebassText {...props} />;
}

Text.defaultProps = {
  color: 'lightBlack',
  fontSize: 2,
  fontFamily: 'sans',
};

export const RebassLink = styled(RebassText)`
  text-decoration: none;
`;

RebassLink.defaultProps = {
  ...Text.defaultProps,
  as: GatsbyLink,
};

export const MarkdownText = styled(RebassText)`
  em {
    font-style: italic;
  }

  strong {
    font-weight: bold;
  }
`;

MarkdownText.defaultProps = {
  as: Markdown,
  ...Text.defaultProps,
};

export default Text;
