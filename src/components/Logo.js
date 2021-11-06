import PropTypes from "prop-types";
import { Box } from "@mui/material";

export const Logo = ({ sx }) => {
  return (
    <Box
      component="img"
      src="/static/logo.svg"
      sx={{ width: 40, height: 40, ...sx }}
    />
  );
};

Logo.propTypes = {
  sx: PropTypes.object,
};
