import styled from 'vue-styled-components';

const colorType = {
  night: Boolean,
};

const HeaderWrapper = styled('p', colorType)`
padding-left: 130px;
position: relative;
text-align: left;
padding-top: 10px;
margin-bottom: 50px
`;

export default HeaderWrapper;
