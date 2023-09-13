import AppWrapper from "./src/components/app-wrapper";
import { ThemeProvider } from "./src/utility/theme-context";

export default function App() {
  return (
    <ThemeProvider>
      <AppWrapper />
    </ThemeProvider>
  );
}
