import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
    html{
        box-sizing: border-box;
        font-size: 62.5%;
    }
    *,*::after, &::before{
        box-sizing: inherit;
    }
    body{
        font-family: 'Montserrat', sans-serif;
        background-color: ${({ theme }) => theme.colors.background};
        margin: 0;
        font-size: 1.6rem;
        line-height: 1.3em;
        color: ${({ theme }) => theme.colors.primary};
    }
    textarea, a, button{
        font-family: 'Montserrat', sans-serif;
    }
    p{
        margin-bottom: 0;
        margin-top: 0;
    }
`;
