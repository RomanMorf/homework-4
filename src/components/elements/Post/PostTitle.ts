import styled from 'vue-styled-components';

const colorType = {
  night: Boolean,
};

const PostTitle = styled('h3', colorType)`
  color: ${(props) => (props.night ? '#d23669' : '#ffa7c4')};
  font-size: 30px;
  font-weight: bold;
  margin: 10px;
  cursor: pointer;
  transition: all ease .5s;
`;

export default PostTitle;
