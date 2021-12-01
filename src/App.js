import { Router } from "./routes";
import { ThemeConfig } from "./theme";
import { GlobalStyles } from "./theme/globalStyles";
import { ScrollToTop } from "./components/ScrollToTop";
import { BaseOptionChartStyle } from "./components/charts/BaseOptionChart";
import { Toaster } from "react-hot-toast";

export const App = () => {
  return (
    <ThemeConfig>
      <Toaster />
      <ScrollToTop />
      <GlobalStyles />
      <BaseOptionChartStyle />
      <Router />
    </ThemeConfig>
  );
};
