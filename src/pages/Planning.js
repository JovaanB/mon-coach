import { Container, Typography } from "@mui/material";
import CustomCalendar from "../components/Calendar";
import moment from "moment";
import Page from "../components/Page";

export const Planning = () => {
  return (
    <Page title="Dashboard: Planning | Mon Coach">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Planning
        </Typography>

        <CustomCalendar
          events={[
            {
              start: moment().toDate(),
              end: moment().add(1, "hours").toDate(),
              title: "Coaching présentiel",
            },
          ]}
        />
      </Container>
    </Page>
  );
};
