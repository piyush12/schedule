import { createGlobalStyle } from 'styled-components';
import 'normalize.css'; // Note this

const GlobalStyles = createGlobalStyle`
    html{
        font-size:10px
    };
    body{
        font-size:2rem;
        font-family: 'Source Sans Pro', sans-serif;
    };

    ul{
        margin:0;
        padding:0
    }
`;

export default GlobalStyles;
