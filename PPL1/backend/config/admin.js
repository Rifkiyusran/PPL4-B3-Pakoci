module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0a68106c097b8f968328b5c439efaf09'),
  },
});
