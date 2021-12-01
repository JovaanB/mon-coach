import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

export const WantsMore = () => {
  return (
    <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
      <Stack
        alignItems="center"
        spacing={3}
        sx={{
          p: 2.5,
          pt: 5,
          borderRadius: 2,
          position: "relative",
          bgcolor: "grey.200",
        }}
      >
        <Box
          component="img"
          src="/static/illustrations/profile_pic.svg"
          sx={{ width: 100, position: "absolute", top: -50 }}
        />

        <Box sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h6">
            T'en veux plus?
          </Typography>
        </Box>

        <Button
          style={{ textTransform: "inherit" }}
          fullWidth
          href="https://material-ui.com/store/items/minimal-dashboard/"
          target="_blank"
          variant="contained"
        >
          Version PRO
        </Button>
      </Stack>
    </Box>
  );
};
