import PropTypes from "prop-types";
import { Box } from "@mui/material";

export const Logo = ({ sx }) => {
  return (
    <Box
      component="img"
      display="flex"
      justifyContent="center"
      src="/static/logo.jpg"
      sx={{ width: 60, height: 40, ...sx }}
    />
  );
};

Logo.propTypes = {
  sx: PropTypes.object,
};
