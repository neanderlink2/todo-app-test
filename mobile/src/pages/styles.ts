import styled from 'styled-components/native';
import { AppTheme } from '../styles/theme';

export const Container = styled.View<{ theme: AppTheme }>`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  padding: 5px 10px;  
`;
