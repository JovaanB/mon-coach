import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box, Button, Typography, Container } from "@mui/material";
import { MotionContainer } from "../components/animate";
import Page from "../components/Page";

const RootStyle = styled(Page)(({ theme }) => ({
  display: "flex",
  minHeight: "100%",
  alignItems: "center",
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

export const NotFound = () => {
  return (
    <RootStyle title="404 | Mon Coach">
      <Container>
        <MotionContainer initial="initial" open>
          <Box sx={{ maxWidth: 480, margin: "auto", textAlign: "center" }}>
            <div>
              <Typography variant="h3" paragraph>
                OH NON
              </Typography>
            </div>
            <Typography sx={{ color: "text.secondary" }}>
              Désolé, nous n'avons pas pu trouver la page que vous recherchez.
              Peut-être que vous avez mal saisi l'URL ? Vérifiez votre
              orthographe.
            </Typography>

            <div>
              <Box
                component="img"
                src="/static/illustrations/illustration_404.svg"
                sx={{ height: 260, mx: "auto", my: { xs: 5, sm: 10 } }}
              />
            </div>

            <Button
              to="/"
              size="large"
              variant="contained"
              component={RouterLink}
            >
              Retour
            </Button>
          </Box>
        </MotionContainer>
      </Container>
    </RootStyle>
  );
};
