import { IS_DEVELOPMENT, PORT } from './config/env';

import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';

import swaggerDocument from './swagger.json';

import connectDB from './db';

// custom modules
import allRoutes from './routes';

import './db';

const app: Application = express();

// Connect to the database
connectDB();

// parse application/json
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(helmet());
app.use(cors());
app.disable('x-powered-by');

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to Node API's by Team Pro",
  });
});

app.use(allRoutes);

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    customCssUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css',
  }),
);

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(
    `⚡️[server]: Server is running at ${
      IS_DEVELOPMENT ? 'http://localhost:' : ''
    }${PORT}`,
  );
});

export default app;
