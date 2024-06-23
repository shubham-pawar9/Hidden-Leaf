import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header/Header";
import Main from "./Pages/Main/Main";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;
