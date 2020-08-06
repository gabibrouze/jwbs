import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

import { neutral } from './colours';
import { HeaderFont, BodyFont } from './typography';

export const GlobalStyles = createGlobalStyle`
${normalize()};
    html {
      font-size: 16px;
      box-sizing: border-box;
      background: ${neutral[200]};
      padding: 20px 60px;
    }

    *, *:after, *:before {
        box-sizing: inherit;
    }
    

    h1 {
        font-family: ${HeaderFont};
    }

    p, 
    a,
    input {
        font-family: ${BodyFont}
    }

    a {
        text-decoration: none;
        color: ${neutral[300]};
    }

    ul {
        list-style: none;
    }
`;
