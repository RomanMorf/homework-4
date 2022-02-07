import styled from 'vue-styled-components';

const colorType = {
  night: Boolean,
};

const MainElement = styled('section', colorType)`
  background-color: ${(props) => (props.night ? '#282c35' : '#FFFFFF')};
  width: 100%;
  min-height: 100vh;
  transition: all ease .5s;
`;

export default MainElement;
