import React, { useState } from "react";
import { CustomCard } from "../../CustomCard";
import {
  Box,
  Chip,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import { SpeedOutlined } from "@mui/icons-material";

export const VMACard = ({ athlete }) => {
  const [distance, setDistance] = useState(100);
  const [pourcent, setPourcent] = useState(60);

  const calculChronoWithVMAAndPourcent = (athlete) => {
    const result =
      (distance * 3600) / (((athlete.speedVMA * pourcent) / 100) * 1000);
    return result;
  };

  const convertNumberToTime = (number) => {
    const sec_num = parseInt(number, 10);
    let hours = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - hours * 3600) / 60);
    let seconds = sec_num - hours * 3600 - minutes * 60;

    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return (
      (hours > 0 ? hours + ":" : "") +
      (minutes > 0 ? minutes + ":" : "") +
      (seconds > 0 ? seconds + "s" : "")
    );
  };

  return (
    <CustomCard title="Vitesse Maximale Aérobie">
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        gap={2}
        marginBottom={2}
      >
        <SpeedOutlined />{" "}
        <Chip
          label={athlete?.speedVMA + " km/h"}
          color="success"
          variant="outlined"
        />
      </Box>
      <Alert severity="info">Calcul du chronomètre en fonction de la VMA</Alert>
      <FormControl fullWidth style={{ margin: "10px 0px" }}>
        <InputLabel id="label-distance">Distance</InputLabel>
        <Select
          labelId="label-distance"
          label="Distance"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        >
          <MenuItem value={100}>100m</MenuItem>
          <MenuItem value={200}>200m</MenuItem>
          <MenuItem value={500}>500m</MenuItem>
          <MenuItem value={10000}>10km</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth style={{ margin: "10px 0px" }}>
        <InputLabel id="label-poucent">Pourcentage</InputLabel>
        <Select
          labelId="label-pourcent"
          label="Pourcentage"
          value={pourcent}
          onChange={(e) => setPourcent(e.target.value)}
        >
          <MenuItem value={60}>60%</MenuItem>
          <MenuItem value={70}>70%</MenuItem>
          <MenuItem value={80}>80%</MenuItem>
          <MenuItem value={90}>90%</MenuItem>
          <MenuItem value={100}>100%</MenuItem>
        </Select>
      </FormControl>
      <Typography variant="h6">
        Temps estimé :{" "}
        {convertNumberToTime(calculChronoWithVMAAndPourcent(athlete))}
      </Typography>
    </CustomCard>
  );
};
