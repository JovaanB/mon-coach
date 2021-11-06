import { styled } from "@mui/material/styles";
import { Card, CardHeader } from "@mui/material";

const CHART_HEIGHT = 372;

const ChartWrapperStyle = styled("div")(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(5),
}));

export const AppCurrentVisits = () => {
  return (
    <Card>
      <CardHeader title="Current Visits" />
      <ChartWrapperStyle dir="ltr">
        <p>Graphique</p>
      </ChartWrapperStyle>
    </Card>
  );
};
