export const supportsRole = ({ authorizedRoles, forbiddenRoles, userRole }) => {
  if (authorizedRoles) {
    return authorizedRoles.includes(userRole);
  }

  if (forbiddenRoles) {
    return !forbiddenRoles.includes(userRole);
  }

  return true;
};
