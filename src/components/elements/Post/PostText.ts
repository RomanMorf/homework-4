import styled from 'vue-styled-components';

const colorType = {
  night: Boolean,
};

const PostText = styled('p', colorType)`
  color: ${(props) => (props.night ? '#FFFFFF' : '#222')};
  font-weight: ${(props) => (props.night ? 'bold' : 'normal')};
  transition: all ease .5s;
`;

export default PostText;
