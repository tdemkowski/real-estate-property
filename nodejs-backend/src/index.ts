import 'dotenv/config';
import * as express from 'express';
// import { connectDB } from './database'
import UserController from './controllers/user.controller';
import { createConnection } from 'typeorm';

createConnection().then(() => {
  const app = express();

  //configure application routes
  //@GET - dummy api route
  //@ts-ignore
  app.get('/api', (req, res, next) => {
    res.status(200).json({
      hello: 'World!',
    });
  });
  
  app.use(UserController)
  const port: Number = Number(process.env.PORT) || 3000;
  app.listen(port, () => {
      console.log(`
  Server running on http://localhost:${port}
  `);
    });
  
})
