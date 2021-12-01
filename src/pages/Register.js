import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box, Card, Link, Container, Typography } from "@mui/material";
import { AuthLayout } from "../layouts/AuthLayout";
import Page from "../components/Page";
import { MHidden } from "../components/@material-extend";
import { RegisterForm } from "../components/authentication/register";

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 464,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(12, 0),
}));

export const Register = () => {
  return (
    <RootStyle title="Créer un compte | Mon Coach">
      <AuthLayout>
        T'as déjà un compte? &nbsp;
        <Link
          underline="none"
          variant="subtitle2"
          component={RouterLink}
          to="/login"
        >
          Se connecter
        </Link>
      </AuthLayout>

      <MHidden width="mdDown">
        <SectionStyle>
          <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
            Gérez vos clients plus efficacement avec <strong>Mon Coach</strong>
          </Typography>
          <img alt="register" src="/static/illustrations/junior_soccer.svg" />
        </SectionStyle>
      </MHidden>

      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              Démarrer gratuitement
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Gratuit pour toujours. Pas besoin de carte de crédit!
            </Typography>
          </Box>

          {/* <AuthSocial /> */}

          <RegisterForm />

          <Typography
            variant="body2"
            align="center"
            sx={{ color: "text.secondary", mt: 3 }}
          >
            En m'inscrivant, j'accepte les conditions Mon Coach suivantes :
            &nbsp;
            <Link underline="always" sx={{ color: "text.primary" }}>
              Conditions d'utilisation
            </Link>
            &nbsp;et&nbsp;
            <Link underline="always" sx={{ color: "text.primary" }}>
              Politique de confidentialité
            </Link>
            .
          </Typography>

          <MHidden width="smUp">
            <Typography variant="subtitle2" sx={{ mt: 3, textAlign: "center" }}>
              T'as déjà un compte?&nbsp;
              <Link to="/login" component={RouterLink}>
                Connectes toi
              </Link>
            </Typography>
          </MHidden>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};
