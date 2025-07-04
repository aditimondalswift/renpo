import express from 'express';
import { Pool } from 'pg';
import cors from 'cors';
import { AppDataSource } from './config/db';
import userRoutes from './routes/userRoutes';

const app = express();
app.use(express.json());

const PORT = 5000;
app.use(cors());
app.use("/users", userRoutes);

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server started on http://localhost:{0}", PORT);
    });
  })
  .catch((error: any) => console.error("DB connection error:", error));

// const pool = new Pool({
//   host: process.env.PGHOST,
//   user: process.env.PGUSER,
//   password: process.env.PGPASSWORD,
//   database: process.env.PGDATABASE,
//   port: Number(process.env.PGPORT),
// });

// app.get('/api', async (_req: express.Request, res: express.Response) => {
//   const { rows } = await pool.query('SELECT NOW()');
//   res.json({ now: rows[0].now });
// });