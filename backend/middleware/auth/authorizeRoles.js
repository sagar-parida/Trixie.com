const authorizeRoles = (roles) => {
  return (req, res, next) => {
    const userRoles = req.user.roles;

    if (!userRoles || !userRoles.some((role) => roles.includes(role))) {
      return res.status(403).json({ message: "Insufficient Permissions" });
    }

    next();
  };
};

module.exports = authorizeRoles;
