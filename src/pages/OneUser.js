import { useEffect, useState } from "react";
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
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useParams } from "react-router";
import Page from "../components/Page";
import USERLIST from "../_mocks_/user";
import { Box } from "@mui/system";
import {
  AccountCircleOutlined,
  HeightOutlined,
  MonitorWeightOutlined,
  TrackChangesOutlined,
} from "@mui/icons-material";

export const OneUser = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const oneUser = USERLIST.find((user) => user.id === id);
    setUser(oneUser);
    setIsLoading(false);
  }, [id]);

  const calculMacros = (user) => {
    const { age, weight, height, gender } = user;
    let macro;

    if (gender === "male") {
      macro = 13.7516 * weight + 500.33 * (height / 100) - 6.755 * age + 66.473;
    } else {
      macro =
        9.5634 * weight + 184.96 * (height / 100) - 4.6756 * age + 655.0955;
    }

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

  const calculIMC = (user) => {
    const { weight, height } = user;
    let result;

    result = weight / Math.pow(height / 100, 2);
    return Math.round(result);
  };

  if (isLoading) return <p>Chargement</p>;
  return (
    <Page title="Dashboard: Planning | Mon Coach">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Utilisateur
        </Typography>

        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6}>
              <Card>
                <CardHeader title="Informations" />
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
                    <div>
                      <Typography variant="h6">{user?.name}</Typography>
                      <p>{user?.email}</p>
                    </div>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="flex-start"
                    gap={2}
                    marginBottom={2}
                  >
                    <AccountCircleOutlined /> <b>{user?.age} ans</b> |
                    <MonitorWeightOutlined /> <b>{user?.weight} KG</b> |
                    <HeightOutlined /> <b>{user?.height} CM</b>
                  </Box>
                  <Alert severity="info">
                    Son <b>IMC</b> est de <b>{calculIMC(user)}</b>
                  </Alert>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Card>
                <CardHeader title="Alimentation" />
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
                      label={user?.status}
                      color="primary"
                      variant="outlined"
                    />
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
          </Grid>
        </Container>
      </Container>
    </Page>
  );
};
