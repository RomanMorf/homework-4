import styled from 'vue-styled-components';

const colorType = {
  night: Boolean,
};

const HeaderTitle = styled('h1', colorType)`
  color: ${(props) => (props.night ? 'white' : 'black')};
  font-size: 50px;
  margin: 0, 0 10px, 0;
  text-align: left;
  display: flex;
  justify-content: space-between;
  transition: all ease .5s;
`;

export default HeaderTitle;
