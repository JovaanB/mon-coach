import faker from "faker";
import PropTypes from "prop-types";
import {
  Box,
  Grid,
  Card,
  Paper,
  Typography,
  CardHeader,
  CardContent,
} from "@mui/material";
import { fShortenNumber } from "../../../utils/formatNumber";
import {
  Google,
  FacebookOutlined,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";

const SOCIALS = [
  {
    name: "FaceBook",
    value: faker.datatype.number(),
    icon: <FacebookOutlined />,
  },
  {
    name: "Google",
    value: faker.datatype.number(),
    icon: <Google />,
  },
  {
    name: "Linkedin",
    value: faker.datatype.number(),
    icon: <LinkedIn />,
  },
  {
    name: "Twitter",
    value: faker.datatype.number(),
    icon: <Twitter />,
  },
];

const SiteItem = ({ site }) => {
  const { icon, value, name } = site;

  return (
    <Grid item xs={6}>
      <Paper variant="outlined" sx={{ py: 2.5, textAlign: "center" }}>
        <Box sx={{ mb: 0.5 }}>{icon}</Box>
        <Typography variant="h6">{fShortenNumber(value)}</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {name}
        </Typography>
      </Paper>
    </Grid>
  );
};

export const AppTrafficBySite = () => {
  return (
    <Card>
      <CardHeader title="Trafic par site" />
      <CardContent>
        <Grid container spacing={2}>
          {SOCIALS.map((site) => (
            <SiteItem key={site.name} site={site} />
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

SiteItem.propTypes = {
  site: PropTypes.object,
};
