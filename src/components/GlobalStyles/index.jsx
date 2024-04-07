import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    --color-primary: #7446e9;
    --color-secondary: #50ceff;
}
body {
   height: 100% 
}
.centered-heading {
    text-align: center;
    font-size: 3rem;
}
`;

export default GlobalStyle;