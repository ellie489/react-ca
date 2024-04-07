import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    --color-primary: #7446e9;
    --color-secondary: #a0e1ff;
}
body {
   height: 100% 
}
.centered-heading {
    text-align: center;
    font-size: 3rem;
}
.centered-text {
    text-align: center;
}
`;

export default GlobalStyle;