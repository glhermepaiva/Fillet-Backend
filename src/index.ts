import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import {AddressInfo} from 'net'
import {userRouter} from './routes/userRouter'

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/user', userRouter)

const server = app.listen(process.env.PORT, () => {
  if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
      console.error(`Failure upon starting server.`);
  }
});