import { createConnection, Connection } from 'typeorm';

export const postgres = async (): Promise<Connection> => {
  try {
    const connection = await createConnection();
    console.log('Postgres database connected');

    return connection;
  } catch ({ message }) {
    console.log(message, 'Postgres connection cannot be established');
    throw new Error(message);
  }
};
