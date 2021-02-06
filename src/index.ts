import express, { Application } from 'express';
import { Connection } from 'typeorm';
import { postgres } from 'db/postgres';
import books from 'routes/books.routes';
import authors from 'routes/authors.routes';

const main = async () => {
  const app: Application = express();
  const connection: Connection = await postgres();

  app.use(express.json());
  app.set('postgres', connection);

  app.use('/api/v1/books', books);
  app.use('/api/v1/authors', authors);

  const PORT = 5000;
  app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
};

main().catch((err) => console.error(err));
