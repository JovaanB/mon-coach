import * as Yup from "yup";
import { useState } from "react";
import { useFormik, Form, FormikProvider } from "formik";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Stack, TextField, IconButton, InputAdornment } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { PasswordOutlined, PasswordRounded } from "@mui/icons-material";
import toaster from "react-hot-toast";
import AuthService from "../../../services/auth.service";

export const RegisterForm = ({ isAthlete }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [searchParams] = useSearchParams();

  const RegisterSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(2, "Trop court!")
      .max(50, "Trop Long!")
      .required("Prénom requis"),
    lastname: Yup.string()
      .min(2, "Trop court!")
      .max(50, "Trop Long!")
      .required("Nom requis"),
    email:
      !isAthlete &&
      Yup.string()
        .email("L'email doit correspondre à une addresse mail valide")
        .required("L'email est requis"),
    password: Yup.string().required("Le mot de passe est requis"),
  });

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (data) => {
      const { email, firstname, lastname, password } = data;

      if (isAthlete) {
        AuthService.join({
          firstname,
          lastname,
          password,
          token: searchParams.get("token"),
        }).then(
          (response) => {
            toaster.success(response.data.message);
            navigate("/login", { replace: true });
          },
          (error) => {
            toaster.error(
              error?.response?.data.message ||
                error?.message ||
                error.toString()
            );
          }
        );
      } else {
        AuthService.register({
          email,
          firstname,
          lastname,
          password,
        }).then(
          (response) => {
            toaster.success(response.data.message);
            navigate("/login", { replace: true });
          },
          (error) => {
            toaster.error(
              error.response?.data.message || error.message || error.toString()
            );
          }
        );
      }
    },
  });

  const { errors, touched, handleSubmit, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              fullWidth
              label="Prénom"
              {...getFieldProps("firstname")}
              error={Boolean(touched.firstname && errors.firstname)}
              helperText={touched.firstname && errors.firstname}
            />

            <TextField
              fullWidth
              label="Nom"
              {...getFieldProps("lastname")}
              error={Boolean(touched.lastname && errors.lastname)}
              helperText={touched.lastname && errors.lastname}
            />
          </Stack>

          <TextField
            fullWidth
            autoComplete="email"
            disabled={isAthlete}
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
                  <IconButton
                    edge="end"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <PasswordOutlined /> : <PasswordRounded />}{" "}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
          >
            Créer un compte
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
};
