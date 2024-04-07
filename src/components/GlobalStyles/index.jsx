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
.StyledButton {
    margin-bottom: 10px;
    margin-top: auto;
    padding: 15px 20px;
    background-color: #7446e9;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 1rem;
    font-weight: bold;
    width: 200px;
    box-sizing: border-box;
  }
  .centered-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .add-padding {
    padding: 20px;
  }
  .add-margin-right {
    margin-right: 20px;
  }
`;

export default GlobalStyle;