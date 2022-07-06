import styled from 'styled-components';

const Input = styled.input`
  width: ${(props) => props.width ?? '100%'}; //props.width가 undefined이면 100%
  height: ${(props) => props.height ?? '2rem'};
  background-color: ${(props) => props.backgroundColor ?? '#dbdbdb'};
  color: ${(props) => props.color ?? '#2d2d2d'};
  border: 1px solid ${(props) => props.borderColor ?? '#dbdbdb'};
  border-radius: ${(props) => props.borderRadius ?? '0'};
`;

export const ValidationInput = styled(Input)`
  background-color: #fdfdfd;
  border: ${(props) => (props.warning ? '1px solid red' : '1px solid #dbdbdb')};
  border-radius: 5px;
`;

export default Input;
