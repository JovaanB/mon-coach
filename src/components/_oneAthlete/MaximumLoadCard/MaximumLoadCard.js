import React, { useState } from "react";
import { CustomCard } from "../../CustomCard";
import {
  Alert,
  FormControl,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";

export const MaximumLoadCard = () => {
  const [weight, setWeight] = useState(undefined);
  const [repetitions, setRepetitions] = useState(undefined);

  const calculUnRM = () => {
    let unRM = 0;

    if (repetitions < 10) {
      unRM = Math.round(weight / (1.03 - 0.03 * repetitions));
    }
    if (repetitions === 10) {
      unRM = Math.round(weight / 0.75);
    }
    if (repetitions > 10) {
      alert("Pour maximum 10 répétitions");
    }

    return unRM;
  };

  const maxLoad = [
    { reps: 25, pourcent: 50, load: Math.round(calculUnRM() * 0.5) },
    { reps: 22, pourcent: 55, load: Math.round(calculUnRM() * 0.55) },
    { reps: 20, pourcent: 60, load: Math.round(calculUnRM() * 0.6) },
    { reps: 16, pourcent: 65, load: Math.round(calculUnRM() * 0.65) },
    { reps: 12, pourcent: 70, load: Math.round(calculUnRM() * 0.7) },
    { reps: 10, pourcent: 75, load: Math.round(calculUnRM() * 0.75) },
    { reps: 8, pourcent: 80, load: Math.round(calculUnRM() * 0.8) },
    { reps: 6, pourcent: 85, load: Math.round(calculUnRM() * 0.85) },
    { reps: 3, pourcent: 90, load: Math.round(calculUnRM() * 0.9) },
    { reps: 2, pourcent: 95, load: Math.round(calculUnRM() * 0.95) },
  ];

  return (
    <CustomCard title="Charges maximales">
      <Alert severity="info">
        Tableau du nombre de répétitions / charge selon 1RM
      </Alert>
      <FormControl fullWidth style={{ margin: "20px 0px" }}>
        <TextField
          label="Poids soulevé"
          inputProps={{
            inputmode: "numeric",
            pattern: "[0-9]*",
            type: "number",
          }}
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth style={{ margin: "10px 0px" }}>
        <TextField
          label="Nombre de répétitions"
          inputProps={{
            inputmode: "numeric",
            pattern: "[0-9]*",
            type: "number",
          }}
          value={repetitions}
          onChange={(e) => setRepetitions(e.target.value)}
        />
      </FormControl>
      <Alert severity="success">Le 1RM est de {calculUnRM()} KG</Alert>
      <TableContainer component={Paper}>
        <Table padding="normal" aria-label="simple table">
          <TableHead>
            <TableRow alignItems="right">
              <TableCell>Pourcentage / Reps</TableCell>
              <TableCell>Charge (KG)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {repetitions > 0 &&
              weight > 0 &&
              maxLoad.map((row) => (
                <TableRow key={row.reps}>
                  <TableCell component="th" scope="row">
                    {row.pourcent}% = {row.reps} reps
                  </TableCell>
                  <TableCell>{row.load}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CustomCard>
  );
};
