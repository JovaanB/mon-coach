import { Router } from "./routes";
import { ThemeConfig } from "./theme";
import { GlobalStyles } from "./theme/globalStyles";
import { ScrollToTop } from "./components/ScrollToTop";
import { BaseOptionChartStyle } from "./components/charts/BaseOptionChart";

export const App = () => {
  return (
    <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <BaseOptionChartStyle />
      <Router />
    </ThemeConfig>
  );
};
