module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/cannalog'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
