module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f47cfb24b3b18dfb62f9bd1f2d2c3ffc'),
  },
});
