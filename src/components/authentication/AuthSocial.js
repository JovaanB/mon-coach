import { FacebookOutlined, Google, Twitter } from "@mui/icons-material";
import { Stack, Button, Divider, Typography } from "@mui/material";

export const AuthSocial = () => {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button fullWidth size="large" color="inherit" variant="outlined">
          <Google />
        </Button>

        <Button fullWidth size="large" color="inherit" variant="outlined">
          <FacebookOutlined />
        </Button>

        <Button fullWidth size="large" color="inherit" variant="outlined">
          <Twitter />
        </Button>
      </Stack>

      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          OU
        </Typography>
      </Divider>
    </>
  );
};
