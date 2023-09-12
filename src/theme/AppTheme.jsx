import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { purpleTheme } from "./purpleTheme";
export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
