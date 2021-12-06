import express from "express";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();

import logger from "./middleware/logger.js";

app.use(logger);

import error400 from "./errors/error400.js";
import error500 from "./errors/error500.js";

app.use(error400);
app.use(error500);

app.listen(process.env.expressPort || 3000, () => {
  console.log(`Listening at http://localhost:${process.env.expressPort || 3000}`);
});