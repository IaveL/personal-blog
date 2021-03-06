import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Roboto Mono', monospace;
    }
    li{
        list-style-type: none;
    }
    :visited {
        color: white;
    }
    a {
        text-decoration: none;
    }
     a:link {
        color: inherit;
    }
`
export default GlobalStyle;
