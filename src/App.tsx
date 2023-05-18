import "./App.css";
import AppProvider from "./providers/app-provider";
import MuiMode from "./components/mui/mui-mode";
import { Users } from "./components/users/users";

function App() {
  return (
    <AppProvider>
      <div className="app">
        <MuiMode />
        <Users />
      </div>
    </AppProvider>
  );
}

export default App;
