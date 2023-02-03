import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
@import 'node_modules/modern-normalize/modern-normalize.css';

*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
p,
h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin: 0;
}

a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
}

button {
    border: none;
    cursor: pointer;
}

input {
    outline: none;
}

img {
    display: block;
    /*width: 100%;
    height: auto;*/
}

ul li {
    //list-style: none;

    margin: 0;
    padding: 0;
}


  body {
    height:100vh;
    background: #282D35;
    color: #61DAFB;

    font-family: 'Inter', sans-serif;
  }
`;

export default GlobalStyle;
