import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`

:root { 
    --red: #E52E4D;
    --green: #33cc95;
    --blue: #5429CC;
    --blue-light: #6933FF;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --background:#f0f2f5;
    --shape: #FFFFFF;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

//o input, text-area e button não importam por padrão a fonte do elemento pai

body, input, textarea, button 
{
    font-family:'Poppins', sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight:600;
}

//font-size: 16px ( Padrão Desktop)

html 
{
    @media (max-width: 1080px)
    {
        font-size: 93.75%;

    }

    @media (max-width: 720px)
    {
        font-size: 87.5%; //14px
    }
}

//REM = 1rem =font-size
body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
}

button {
    cursor: pointer;
}

[disabled]
{
    opacity: 0.6;
    cursor: not-allowed;
}
`