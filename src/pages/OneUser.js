import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Alert,
  Chip,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { useParams } from "react-router";
import Page from "../components/Page";
import USERLIST from "../_mocks_/user";
import { Box } from "@mui/system";
import {
  EmailOutlined,
  FacebookOutlined,
  HeightOutlined,
  Instagram,
  LinkedIn,
  ModeEditOutlined,
  MonitorWeightOutlined,
  PhoneCallbackOutlined,
  TrackChangesOutlined,
  Twitter,
} from "@mui/icons-material";
import { VMACard } from "../components/_oneUser/VMACard/VMACard";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <span
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </span>
  );
};

export const OneUser = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = React.useState(0);
  const { id } = useParams();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const oneUser = USERLIST.find((user) => user.id === id);
    setUser(oneUser);
    setIsLoading(false);
  }, [id]);

  const activityType = (macro) => {
    return [
      {
        id: 1,
        description: "Sédentaire",
        value: Math.round(1.2 * macro),
      },
      {
        id: 2,
        description: "Légèrement actif",
        value: Math.round(1.37 * macro),
      },
      {
        id: 3,
        description: "Modérément actif",
        value: Math.round(1.55 * macro),
      },
      {
        id: 4,
        description: "Très actif",
        value: Math.round(1.725 * macro),
      },
      {
        id: 5,
        description: "Extrêmement actif",
        value: Math.round(1.9 * macro),
      },
    ];
  };

  const calculMacros = (user) => {
    const { age, weight, height, gender } = user;
    let macro;

    if (gender === "male") {
      macro = 13.7516 * weight + 500.33 * (height / 100) - 6.755 * age + 66.473;
    } else {
      macro =
        9.5634 * weight + 184.96 * (height / 100) - 4.6756 * age + 655.0955;
    }

    return activityType(macro);
  };

  const calculIMC = (user) => {
    const { weight, height } = user;
    let result;

    result = weight / Math.pow(height / 100, 2);
    return Math.round(result);
  };

  const calculIdealWeight = (user) => {
    const { height, gender } = user;
    let result;

    if (gender === "male") {
      result = height - 100 - (height - 150) / 4;
    } else {
      result = height - 100 - (height - 150) / 2.5;
    }

    return result;
  };

  if (isLoading) return <p>Chargement</p>;
  return (
    <Page title="Dashboard: Planning | Mon Coach">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Utilisateur
        </Typography>

        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <Card style={{ height: "100%" }}>
                <CardHeader
                  title="Informations"
                  action={<ModeEditOutlined />}
                />
                <CardContent>
                  <Box
                    marginBottom={3}
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <Avatar
                      alt={user?.name}
                      src={user?.avatarUrl}
                      sx={{ width: 56, height: 56, marginX: 3 }}
                    />

                    <Typography variant="h6">
                      {user?.name} | {user?.age} ans
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="flex-start"
                    gap={2}
                    marginBottom={2}
                  >
                    <MonitorWeightOutlined /> <b>{user?.weight} KG</b>
                    <HeightOutlined /> <b>{user?.height} CM</b>
                  </Box>
                  <Alert severity="info">
                    Son <b>IMC</b> est de <b>{calculIMC(user)}</b> | Poids idéal{" "}
                    <b>{calculIdealWeight(user)}</b> KG
                  </Alert>
                  <Typography variant="h5" marginY={2}>
                    Contact
                  </Typography>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-start"
                    gap={2}
                    marginBottom={1}
                  >
                    <EmailOutlined /> <span>{user?.email}</span>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-start"
                    gap={2}
                    marginBottom={1}
                  >
                    <PhoneCallbackOutlined /> <span>07 88 96 25 20</span>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-start"
                    gap={2}
                    marginBottom={1}
                  >
                    <FacebookOutlined />
                    <Instagram />
                    <Twitter />
                    <LinkedIn />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Card>
                <CardHeader
                  title="Alimentation"
                  action={<ModeEditOutlined />}
                />
                <CardContent>
                  <Box
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="center"
                    gap={2}
                    marginBottom={2}
                  >
                    <TrackChangesOutlined />{" "}
                    <Chip
                      label={user?.goal}
                      color="primary"
                      variant="outlined"
                    />
                    | Sédentaire
                  </Box>
                  <Alert severity="success">
                    Son <b>BMR</b> (Métabolisme de base) en fonction de son
                    niveau activité est de
                  </Alert>
                  <TableContainer component={Paper}>
                    <Table padding="normal" aria-label="simple table">
                      <TableHead>
                        <TableRow alignItems="right">
                          <TableCell>Niveau d'activité</TableCell>
                          <TableCell>Besoin quotidien (kcal.)</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {calculMacros(user).map((row) => (
                          <TableRow
                            selected={row.id === user.activityId}
                            key={row.description}
                          >
                            <TableCell component="th" scope="row">
                              {row.description}
                            </TableCell>
                            <TableCell>{row.value}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  marginTop: "10px",
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Course à pied" />
                  <Tab label="Musculation" />
                  <Tab label="Autres" />
                </Tabs>
              </Box>
            </Grid>
            <TabPanel value={value} index={0}>
              <Grid item>
                <VMACard user={user} />
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              Musculation
            </TabPanel>
            <TabPanel value={value} index={2}>
              Autres
            </TabPanel>
          </Grid>
        </Container>
      </Container>
    </Page>
  );
};
