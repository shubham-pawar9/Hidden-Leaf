import "./App.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Main from "./Pages/Main/Main";
import { APP_THEME_COLORS, IS_DARK_THEME } from "./constants/theme";

const appTheme = createTheme({
  palette: {
    mode: IS_DARK_THEME ? "dark" : "light",
    background: {
      default: IS_DARK_THEME ? APP_THEME_COLORS.background : "#ffffff",
      paper: IS_DARK_THEME ? APP_THEME_COLORS.surface : "#ffffff",
    },
    text: {
      primary: IS_DARK_THEME ? APP_THEME_COLORS.textPrimary : "#111827",
      secondary: IS_DARK_THEME ? APP_THEME_COLORS.textSecondary : "#6b7280",
    },
    primary: {
      main: IS_DARK_THEME ? APP_THEME_COLORS.accent : "#111827",
      contrastText: IS_DARK_THEME ? "#0f172a" : "#ffffff",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <div className="App">
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
