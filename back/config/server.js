module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 39002),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '89a273ace0a72464d924a392a8950e69'),
    },
  },
});
