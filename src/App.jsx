import React from "react";
import {
	Container,
	Heading,
	BaseButton,
	ButtonPrimary,
	ButtonSecondary,
	GlobalStyles,
	AnimatedButton,
} from "./styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Container>
				<Heading>Melker melker melker melker melker</Heading>
				<BaseButton>Melker time</BaseButton>
				<BaseButton primary>Press for Melker</BaseButton>
				<ButtonPrimary
					as={"a"}
					href="https://chatgpt.com/?oai-dm=1"
					target="_blank"
				>
					Act 1
				</ButtonPrimary>
				<ButtonSecondary>Act 2</ButtonSecondary>
				<AnimatedButton>Melker</AnimatedButton>
			</Container>
		</ThemeProvider>
	);
};

export default App;
