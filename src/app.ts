import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/students.route';
const app: Application = express();
const port = 3000;

//parsers

app.use(express.json());
app.use(cors());

//api/vi/students/create-student

//application routes
app.use('/api/v1/students', StudentRoutes);

app.get('/', (req: Request, res: Response) => {
  const a = 0;

  res.send(a);
});

export default app;
