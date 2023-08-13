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
      box-sizing: border-box;
    };

    body {
      position: relative;
      color: #111;
      font-family: 'Pretendard', sans-serif;
      box-sizing: border-box;
    };
		
    a {
      text-decoration: none;
      color: inherit;
    }

    button {
			padding: 0;
			background-color: transparent;
			border: none;
      color: ${theme.color.black};
			cursor: pointer;

			&.sizeS {
				padding: 4px 8px;
				border: 1px solid ${theme.color.da};
				border-radius: 3px;
			}
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

    input[type="text"], 
    input[type="password"], 
    input[type="email"], 
    input[type="search"], 
    input[type="image"], 
    input[type="tel"], 
    button, 
    select, 
    textarea{
      -webkit-border-radius: 0;
      -webkit-appearance: none;
      color: initial;
    }

    .mj {
      &__empty {
        ${theme.flexCenter};
        min-height: 300px;

        &__text {
          color: ${theme.color[79]};
        }
      }
    }
`;

export default GlobalStyles;