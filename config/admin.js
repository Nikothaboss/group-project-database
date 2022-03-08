module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd1bd4a9d650527ff40589eacb7de0fcb'),
  },
});
