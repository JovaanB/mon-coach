import { styled } from "@mui/material/styles";
import { Card, CardHeader } from "@mui/material";

const CHART_HEIGHT = 392;

const ChartWrapperStyle = styled("div")(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(2),
}));

export const AppCurrentSubject = () => {
  return (
    <Card>
      <CardHeader title="Current Subject" />
      <ChartWrapperStyle dir="ltr">
        <p>Graphique</p>
      </ChartWrapperStyle>
    </Card>
  );
};
