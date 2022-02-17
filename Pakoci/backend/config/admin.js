module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e715c818bf9e7a92dfe3eb6f7a41b1a5'),
  },
});
