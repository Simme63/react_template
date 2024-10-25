import styled, { createGlobalStyle } from "styled-components";
import { rotate } from "./animations";

const GlobalStyles = createGlobalStyle`
    *{margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    }
`

const Container = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: aqua;
	flex-direction: column;
`;

const Heading = styled.h1`
	font-size: 2rem;
	color: #de69de;
	font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

const BaseButton = styled.button`
	border: none;
	border-radius: 5px;
	background-color: ${(props) => (props.primary ? `green` : `blue`)};
	color: black;
	cursor: pointer;
	padding: 1rem;
`;

const ButtonPrimary = styled(BaseButton)`
	background-color: ${props => (props.theme.base_font_color ? props.theme.base_font_color : "#CCC")};
`;

const ButtonSecondary = styled(BaseButton)`
	background-color: yellowgreen;
`;

const AnimatedButton = styled(BaseButton)`
    animation: ${rotate} 10s ease;
`

export { Container, Heading, BaseButton, ButtonPrimary, ButtonSecondary, GlobalStyles, AnimatedButton }