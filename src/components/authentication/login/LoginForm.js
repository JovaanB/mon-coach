import * as Yup from "yup";
import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useFormik, Form, FormikProvider } from "formik";
import {
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { PasswordOutlined, PasswordRounded } from "@mui/icons-material";
import toaster from "react-hot-toast";
import AuthService from "../../../services/auth.service";

export const LoginForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("L'email doit correspondre à une addresse mail valide")
      .required("L'email est requis"),
    password: Yup.string().required("Le mot de passe est requis"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: (data) => {
      const { email, password } = data;
      setIsLoading(true);
      AuthService.login({ email, password }).then(
        () => {
          toaster.success("Tu es connecté");
          navigate("/dashboard/app", { replace: true });
        },
        (error) => {
          toaster.error(error.response.data.message ?? error.message);
        }
      );
      setIsLoading(false);
    },
  });

  const { errors, touched, values, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="email"
            type="email"
            label="Email"
            {...getFieldProps("email")}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? "text" : "password"}
            label="Mot de passe"
            {...getFieldProps("password")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    {showPassword ? <PasswordOutlined /> : <PasswordRounded />}{" "}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ my: 2 }}
        >
          <FormControlLabel
            control={
              <Checkbox
                {...getFieldProps("remember")}
                checked={values.remember}
              />
            }
            label="Se souvenir de moi"
          />

          <Link component={RouterLink} variant="subtitle2" to="#">
            Mot de passe oublié?
          </Link>
        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isLoading}
        >
          Se connecter
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
};
