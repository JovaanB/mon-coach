import { Alert, TextField, Box, Button } from "@mui/material";
import React, { useState } from "react";
import { CustomDialog } from "./CustomDialog";
import AuthService from "../services/auth.service";
import toast from "react-hot-toast";

export const InviteAthleteDialog = ({ isOpen, handleClose }) => {
  const [email, setEmail] = useState("");
  const user = AuthService.getCurrent();

  const sendInvitation = () => {
    AuthService.invite({
      email,
      user,
    });
    handleClose();
    toast.success(`${email} a reçu une invitation.`);
  };

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
        <TextField
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          id="email"
          label="Email"
        />
        <Button variant="outlined" onClick={sendInvitation}>
          Envoyer
        </Button>
      </Box>
    </CustomDialog>
  );
};
