import { Card, CardHeader, Box } from "@mui/material";

export const AppWebsiteVisits = () => {
  return (
    <Card>
      <CardHeader title="Website Visits" subheader="(+43%) than last year" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <p>Graphique</p>
      </Box>
    </Card>
  );
};
