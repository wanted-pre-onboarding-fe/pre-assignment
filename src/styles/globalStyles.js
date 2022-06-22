import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
 ${reset}
 * {
   box-sizing:border-box;
   outline:none;
   border:none;
 }

 html, body {
  height : 100vh;
}

ul {
  list-style: none;
}

a {
  color: black;
  text-decoration: none;
}
`;

export default GlobalStyles;
