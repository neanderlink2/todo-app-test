import styled from 'styled-components/native';
import { AppTheme } from '../theme';

export const StyledText = styled.Text<{ theme: AppTheme }>`
    color: ${({ theme }) => theme.textColor}
`;

export const StyledButton = styled.TouchableOpacity<{ theme: AppTheme, variant: 'primary' | 'secondary' }>`
    background-color: ${({ theme, variant }) => !variant ? theme.main : variant === "primary" ? theme.main : theme.secondary};
    padding: 10px 25px;
    text-transform: capitalize;
    border-radius: 5px;    
    flex-direction: row;
    align-items: center;
    justify-content: center;
`