import express from 'express';
import { Pool } from 'pg';
import cors from 'cors';
import { AppDataSource } from './config/db';
import userRoutes from './routes/userRoutes';

const app = express();
app.use(express.json());

const PORT = process.env.SERVER_PORT || 5000;
app.use(cors());
app.use("/users", userRoutes);

const initializeDatabase = async (retries = 5, delay = 5000) => {
  for (let i = 0; i < retries; i++) {
    try {
      await AppDataSource.initialize();
      console.log('Database connected successfully');
      return;
    } catch (error) {
      console.log(`Database connection attempt ${i + 1} failed:`, error);
      if (i === retries - 1) {
        throw error;
      }
      console.log(`Retrying in ${delay / 1000} seconds...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
};

initializeDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`);
    });
  })
  .catch((error: any) => {
    console.error("Failed to connect to database after retries:", error);
    process.exit(1);
  });

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