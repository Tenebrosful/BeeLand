import express from "express";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import { initBDD } from "../database/database.js";
import cors from 'cors'
/**
 * Setup
 */

dotenv.config();

initBDD();

const app = express();

/**
 * Middlewares
 */

import logger from "./middleware/logger.js";

app.use(logger);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors())
/**
 * Routes
 */
import api from "./routes/api.js";

app.use('/api', api);

/**
 * Handle errors
 */

import error400 from "./errors/error400.js";
import error500 from "./errors/error500.js";

app.use(error400);
app.use(error500);

app.listen(process.env.expressPort || 3000, () => {
  console.log(`Listening at http://localhost:${process.env.expressPort || 3000}`);
});