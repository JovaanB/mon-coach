import { styled } from "@mui/material/styles";
import { Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";

const RootStyle = styled("div")(({ theme }) => ({
  zIndex: 999,
  right: 0,
  display: "flex",
  cursor: "pointer",
  position: "fixed",
  alignItems: "center",
  top: theme.spacing(16),
  height: theme.spacing(5),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(1.25),
  boxShadow: theme.customShadows.z20,
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  borderTopLeftRadius: theme.shape.borderRadiusMd,
  borderBottomLeftRadius: theme.shape.borderRadiusMd,
  transition: theme.transitions.create("opacity"),
  "&:hover": { opacity: 0.72 },
}));

export const ProductCartWidget = () => {
  return (
    <RootStyle>
      <Badge showZero badgeContent={0} color="error" max={99}>
        <ShoppingCartOutlined />
      </Badge>
    </RootStyle>
  );
};
