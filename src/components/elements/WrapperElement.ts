import styled from 'vue-styled-components';

const colorType = {
  night: Boolean,
};

const WrapperElement = styled('section', colorType)`
  margin: 0 auto;
  max-width: 700px;
  padding: 20px 10px;
`;

export default WrapperElement;
