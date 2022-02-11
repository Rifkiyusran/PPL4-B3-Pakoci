module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '764f30c59768217906eb31f03f90890a'),
  },
});
