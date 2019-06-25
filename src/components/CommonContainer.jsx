import styled from 'styled-components';
import { Box } from 'rebass';

const CommonContainer = styled(Box)`
  position: relative;
  box-sizing: content-box;
  max-width: 1300px;
`;

CommonContainer.defaultProps = {
  px: [3, 3, 5],
  w: 1,
  mx: 'auto',
};

export default CommonContainer;
