import styled from 'styled-components';

const Button = styled.button`
  background-color: #0095f6;
  color: white;
  height: 1.5rem;
  padding: auto auto;
`;

export const LoginButton = styled(Button)`
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`;

export default Button;
