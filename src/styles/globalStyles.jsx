import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import theme from '../util/theme';

const GlobalStyles = createGlobalStyle`
    ${reset}

    * {
      box-sizing: border-box;
    };

		html {
      font-size: 12px;
    };
		
    a {
      text-decoration: none;
      color: inherit;
    }

    button {
			padding: 0;
			background-color: transparent;
			border: none;
			cursor: pointer;

			&.sizeS {
				padding: 4px 8px;
				border: 1px solid ${theme.color.da};
				border-radius: 3px;
			}
		};

    body {
      position: relative;
      color: #111;
      font-family: 'Pretendard', sans-serif;
    };

		h2, p {
   		margin: 0;
  	}

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
			margin : 0;
			-webkit-appearance: none;
    };

    input[type="number"] {
			-moz-appearance: textfield;
    };

    input[type="text" i] {
      padding: none;
    };

    ul,li{
			padding-left: 0px;
      list-style: none;
    };
`;

export default GlobalStyles;