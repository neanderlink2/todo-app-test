import React from 'react';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useThemeToggle } from '../contexts/ThemeProvider';
import { StyledButton, StyledText } from '../styles/Commons';
import dark from '../styles/dark.theme';
import light from '../styles/light.theme';
import { Container } from './styles';

export default function PrincipalPage() {
    const { scheme, toggleColorSchema } = useThemeToggle();
    return (
        <ThemeProvider theme={scheme === "light" ? light : dark}>
            <Container>
                <StyledText>Agora está com o tema</StyledText>
                <StyledButton variant="secondary" onPress={toggleColorSchema}>
                    <Text>Mudar tema</Text>
                </StyledButton>
            </Container>
        </ThemeProvider>
    )
}
