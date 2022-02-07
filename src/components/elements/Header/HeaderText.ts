import styled from 'vue-styled-components';

const colorType = {
  night: Boolean,
};

const HeaderText = styled('p', colorType)`
  color: ${(props) => (props.night ? 'white' : 'black')};
  font-weight: bold;
  margin: 10px;
  cursor: pointer;
  transition: all ease .5s;
`;

export default HeaderText;
