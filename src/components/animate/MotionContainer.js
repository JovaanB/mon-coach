import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { varWrapEnter } from "./variants";

export const MotionContainer = ({ open, children, ...other }) => {
  return (
    <Box
      initial={false}
      animate={open ? "animate" : "exit"}
      variants={varWrapEnter}
      {...other}
    >
      {children}
    </Box>
  );
};

MotionContainer.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node,
};
