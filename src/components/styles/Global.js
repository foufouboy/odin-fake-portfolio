import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
    }

    body {
        font-family: "Roboto";
    }

    h1,
    h2,
    h3,
    h4 {
        font-family: "Playfair Display";
    }
`

export default GlobalStyles;
