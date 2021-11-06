import PropTypes from "prop-types";
import SimpleBarReact from "simplebar-react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const RootStyle = styled("div")({
  flexGrow: 1,
  height: "100%",
  overflow: "hidden",
});

const SimpleBarStyle = styled(SimpleBarReact)(({ theme }) => ({
  maxHeight: "100%",
}));

export const Scrollbar = ({ children, sx, ...other }) => {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  if (isMobile) {
    return (
      <Box sx={{ overflowX: "auto", ...sx }} {...other}>
        {children}
      </Box>
    );
  }

  return (
    <RootStyle>
      <SimpleBarStyle timeout={500} clickOnTrack={false} sx={sx} {...other}>
        {children}
      </SimpleBarStyle>
    </RootStyle>
  );
};

Scrollbar.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
};
