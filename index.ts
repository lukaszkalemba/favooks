import express, { Application } from 'express';
import books from 'routes/books.routes';

const app: Application = express();

app.use('/api/v1/books', books);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
