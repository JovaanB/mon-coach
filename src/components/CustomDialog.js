import React from "react";
import propTypes from "prop-types";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { Box } from "@mui/system";
import { Close } from "@mui/icons-material";

export const CustomDialog = ({
  isOpen,
  handleClose,
  title,
  subtitle,
  children,
}) => {
  return (
    <>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            {title}
            <Close onClick={handleClose} />
          </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{subtitle}</DialogContentText>
          {children}
        </DialogContent>
      </Dialog>
    </>
  );
};

CustomDialog.propTypes = {
  isOpen: propTypes.bool.isRequired,
  handleClose: propTypes.func.isRequired,
  title: propTypes.string.isRequired,
  subtitle: propTypes.string,
  children: propTypes.element.isRequired,
};
