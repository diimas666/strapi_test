module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'mySuperSecretAdminKey123'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'mySuperSecretSalt123'),
  },
});
