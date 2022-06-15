import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
 ${reset}
 * {
   box-sizing:border-box;
   outline:none;
   border:none;
 }
 body {
   overflow-y: scroll;
 }
 a {
   color: black;
   text-decoration: none;
 }
`;

export default GlobalStyles;
