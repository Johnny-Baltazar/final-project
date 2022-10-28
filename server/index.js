require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const errorMiddleware = require('./error-middleware');
const pg = require('pg');
const argon2 = require('argon2');
const ClientError = require('./client-error');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  SSL: {
    rejectUnauthorized: false
  }
});

const app = express();

app.use(staticMiddleware);
app.use(express.json());

app.post('/api/auth/sign-up', (req, res, next) => {
  const { username, firstName, lastName, email, location, password, details } = req.body;
  if (!username || !firstName || !lastName || !email || !location || !password || !details) {
    throw new ClientError(400, 'missing required fields');
  }
  argon2
    .hash(password)
    .then(password => {
      const sql = `
      insert into "users" ("username", "firstName", "lastName", "email", "location", "password", "details")
      values ($1, $2, $3, $4, $5, $6, $7)
      returning "userId", "username", "firstName", "lastName", "email", "location", "details"
    `;
      const params = [username, firstName, lastName, email, location, password, details];
      return db.query(sql, params);
    })
    .then(result => {
      const [user] = result.rows;
      res.status(201).json(user);
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
