import { useRef, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { alpha } from "@mui/material/styles";
import {
  Button,
  Box,
  Divider,
  MenuItem,
  Typography,
  Avatar,
  IconButton,
} from "@mui/material";
import {
  HomeOutlined,
  PersonOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import { MenuPopover } from "../../components/MenuPopover";
import AuthService from "../../services/auth.service";

const MENU_OPTIONS = [
  {
    label: "Accueil",
    icon: HomeOutlined,
    linkTo: "/",
  },
  {
    label: "Profil",
    icon: PersonOutlined,
    linkTo: "#",
  },
  {
    label: "Paramètres",
    icon: SettingsOutlined,
    linkTo: "#",
  },
];

export const AccountPopover = () => {
  const anchorRef = useRef(null);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { firstname, lastname, email } = AuthService.getCurrent();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onLogout = () => {
    AuthService.logout();
    navigate("/login", { replace: true });
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            "&:before": {
              zIndex: 1,
              content: "''",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              position: "absolute",
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
            },
          }),
        }}
      >
        <Avatar
          src="/static/mock-images/avatars/avatar_default.svg"
          alt="photoURL"
        />
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 220 }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" noWrap>
            {firstname} {lastname}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {email}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        {MENU_OPTIONS.map((option) => (
          <MenuItem
            key={option.label}
            to={option.linkTo}
            component={RouterLink}
            onClick={handleClose}
            sx={{ typography: "body2", py: 1, px: 2.5 }}
          >
            <Box
              icon={option.icon}
              sx={{
                mr: 2,
                width: 24,
                height: 24,
              }}
            />

            {option.label}
          </MenuItem>
        ))}

        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button onClick={onLogout} fullWidth color="error" variant="outlined">
            Déconnexion
          </Button>
        </Box>
      </MenuPopover>
    </>
  );
};
