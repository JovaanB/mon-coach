import authService from "../services/auth.service";

const authHeader = () => {
  const user = authService.getCurrent();

  if (user && user.accessToken) {
    return { "x-access-token": user.accessToken };
  } else {
    return {};
  }
};

export default authHeader;
