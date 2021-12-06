import express from "express";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();

import logger from "./middleware/logger.js";

app.use(logger);

app.listen(process.env.expressPort || 3000, () => {
  console.log(`Listening at http://localhost:${process.env.expressPort || 3000}`);
});