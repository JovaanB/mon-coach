import React from "react";
import { Box, Stack, Button } from "@mui/material";

export const InviteAthlete = () => {
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
          href="https://material-ui.com/store/items/minimal-dashboard/"
          target="_blank"
          variant="contained"
        >
          Inviter un athlète
        </Button>
      </Stack>
    </Box>
  );
};
