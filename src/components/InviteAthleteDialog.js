import { Alert, TextField, Box, Button } from "@mui/material";
import React from "react";
import { CustomDialog } from "./CustomDialog";

export const InviteAthleteDialog = ({ isOpen, handleClose }) => {
  return (
    <CustomDialog
      isOpen={isOpen}
      handleClose={handleClose}
      title="Inviter un athlète"
      subtitle={
        <Alert>
          L'athlète va recevoir un lien d'invitation à la plateforme.
        </Alert>
      }
    >
      <Box
        marginTop="20px"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap={2}
      >
        <TextField fullWidth required id="email" label="Email" />
        <Button variant="outlined">Envoyer</Button>
      </Box>
    </CustomDialog>
  );
};
