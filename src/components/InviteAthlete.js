import React, { useState } from "react";
import { Box, Stack, Button } from "@mui/material";
import { PersonAdd } from "@mui/icons-material";
import { InviteAthleteDialog } from "./InviteAthleteDialog";

export const InviteAthlete = () => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  return (
    <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
      <Stack
        alignItems="center"
        spacing={3}
        sx={{
          p: 2.5,
          borderRadius: 2,
          position: "relative",
          bgcolor: "grey.200",
        }}
      >
        <Button
          style={{ textTransform: "inherit" }}
          fullWidth
          startIcon={<PersonAdd />}
          onClick={() => setIsOpenDialog(true)}
          variant="contained"
        >
          Inviter un athlète
        </Button>

        <InviteAthleteDialog
          isOpen={isOpenDialog}
          handleClose={() => setIsOpenDialog(false)}
        />
      </Stack>
    </Box>
  );
};
