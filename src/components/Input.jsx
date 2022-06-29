import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: 2rem;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : '#fdfdfd'};
  border: ${(props) => (props.valid ? '1px solid #dbdbdb' : '2px solid red')};
`;

export default Input;
