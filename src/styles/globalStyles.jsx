import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

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
			background-color:transparent;
			border:0 none;
			cursor:pointer
		};

    body {
      position: relative;
      color: #111;
      font-family: 'Pretendard' sans-serif;
    };

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
			margin : 0;
			-webkit-appearance: none;
    };

    input[type="number"] {
			-moz-appearance: textfield;
    };

    ul,li{
			padding-left: 0px;
      list-style: none;
    };
`;

export default GlobalStyles;