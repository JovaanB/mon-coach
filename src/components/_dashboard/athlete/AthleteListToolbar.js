import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import {
  Box,
  Toolbar,
  Tooltip,
  IconButton,
  Typography,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import {
  Filter1Outlined,
  RestoreFromTrashOutlined,
  SearchOutlined,
} from "@mui/icons-material";

const RootStyle = styled(Toolbar)(({ theme }) => ({
  height: 96,
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1, 0, 3),
}));

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  width: 240,
  transition: theme.transitions.create(["box-shadow", "width"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  "&.Mui-focused": { width: 320, boxShadow: theme.customShadows.z8 },
  "& fieldset": {
    borderWidth: `1px !important`,
    borderColor: `${theme.palette.grey[500_32]} !important`,
  },
}));

export const AthleteListToolbar = ({
  numSelected,
  filterName,
  onFilterName,
}) => {
  return (
    <RootStyle
      sx={{
        ...(numSelected > 0 && {
          color: "primary.main",
          bgcolor: "primary.lighter",
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography component="div" variant="subtitle1">
          {numSelected} selectionnés
        </Typography>
      ) : (
        <SearchStyle
          value={filterName}
          onChange={onFilterName}
          placeholder="Recherche"
          startAdornment={
            <InputAdornment position="start">
              <Box icon={<SearchOutlined />} sx={{ color: "text.disabled" }} />
            </InputAdornment>
          }
        />
      )}

      {numSelected > 0 ? (
        <Tooltip title="Supprimer">
          <IconButton>
            <RestoreFromTrashOutlined />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filtrer la liste">
          <IconButton>
            <Filter1Outlined />
          </IconButton>
        </Tooltip>
      )}
    </RootStyle>
  );
};

AthleteListToolbar.propTypes = {
  numSelected: PropTypes.number,
  filterName: PropTypes.string,
  onFilterName: PropTypes.func,
};
