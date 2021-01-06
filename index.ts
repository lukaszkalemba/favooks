import express, { Application } from 'express';
import { Connection } from 'typeorm';
import { postgres } from 'db/postgres';
import books from 'routes/books.routes';

const main = async () => {
  const app: Application = express();
  const connection: Connection = await postgres();

  app.use(express.json());
  app.set('postgres', connection);

  app.use('/api/v1/books', books);

  const PORT = 5000;
  app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
};

main().catch((err) => console.error(err));
