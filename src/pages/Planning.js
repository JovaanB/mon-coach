import { Container, Typography } from "@mui/material";
import { Calendar } from "../components/Calendar";
import Page from "../components/Page";

export const Planning = () => {
  return (
    <Page title="Dashboard: Planning | Mon Coach">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Planning
        </Typography>

        <Calendar />
      </Container>
    </Page>
  );
};
