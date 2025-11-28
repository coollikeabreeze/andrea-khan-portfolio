import { AppRoutes } from "./AppRoutes";
import { AppThemeProvider } from "./providers/AppThemeProvider";

export const App = () => {
  return (
    <AppThemeProvider>
      <AppRoutes />
    </AppThemeProvider>
  );
};

export default App;
