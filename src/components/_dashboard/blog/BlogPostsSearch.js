import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Box, TextField, Autocomplete, InputAdornment } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";

const RootStyle = styled("div")(({ theme }) => ({
  "& .MuiAutocomplete-root": {
    width: 200,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.shorter,
    }),
    "&.Mui-focused": {
      width: 240,
      "& .MuiAutocomplete-inputRoot": {
        boxShadow: theme.customShadows.z12,
      },
    },
  },
  "& .MuiAutocomplete-inputRoot": {
    "& fieldset": {
      borderWidth: `1px !important`,
      borderColor: `${theme.palette.grey[500_32]} !important`,
    },
  },
  "& .MuiAutocomplete-option": {
    "&:not(:last-child)": {
      borderBottom: `solid 1px ${theme.palette.divider}`,
    },
  },
}));

export const BlogPostsSearch = ({ posts }) => {
  return (
    <RootStyle>
      <Autocomplete
        size="small"
        disablePortal
        popupIcon={null}
        options={posts}
        getOptionLabel={(post) => post.title}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Recherche"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <>
                  <InputAdornment position="start">
                    <Box
                      icon={<SearchOutlined />}
                      sx={{
                        ml: 1,
                        width: 20,
                        height: 20,
                        color: "text.disabled",
                      }}
                    />
                  </InputAdornment>
                  {params.InputProps.startAdornment}
                </>
              ),
            }}
          />
        )}
      />
    </RootStyle>
  );
};

BlogPostsSearch.propTypes = {
  posts: PropTypes.array.isRequired,
};
