import * as styledComponents from "styled-components/native";
import { AppTheme } from "./theme";


const {
    default: styled,
    css,
    ThemeProvider
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<AppTheme>;

export { css, ThemeProvider };
export default styled;