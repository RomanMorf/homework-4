import styled from 'vue-styled-components';

const colorType = {
  night: Boolean,
};

const HeaderLink = styled('a', colorType)`
color: ${(props) => (props.night ? '#d23669' : '#ffa7c4')};
font-weight: bold;
margin: 10px;
cursor: pointer;
transition: all ease .5s;
`;

export default HeaderLink;
