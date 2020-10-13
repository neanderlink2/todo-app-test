import React from 'react';
import { useColorScheme } from 'react-native';
import ThemeToggleProvider from './contexts/ThemeProvider';
import PrincipalPage from './pages';

export default function App() {
  const colorSchema = useColorScheme();
  return (
    <ThemeToggleProvider initialSchema={colorSchema ?? "light"}>
      <PrincipalPage />
    </ThemeToggleProvider>
  );
}