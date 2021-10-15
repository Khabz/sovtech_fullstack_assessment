import { ApolloServer } from 'apollo-server-express';
import express, { Request, Response } from 'express';
import { createServer } from 'http';
import dotenv from 'dotenv-safe';
import cors from 'cors';
import compression from 'compression';
import path from 'path';
import schema from '@src/graphql/schemas/schema';
import { performAstCodegen } from '@src/codegen';

dotenv.config();
const PORT = process.env.PORT || 4000;

const startServer = async () => {
  const app = express();
  const server = new ApolloServer({
    schema,
  });

  app.use(cors());
  app.use(compression());

  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });
  const httpServer = createServer(app);
  // Perform codegen when server starts
  performAstCodegen();

  app.use(express.static('public'));

  app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  });

  httpServer.listen(PORT, () => {
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
};

startServer();
