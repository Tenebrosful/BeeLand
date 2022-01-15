import express from "express";
import error501 from "../errors/error501.js";
const plant = express.Router();

/**
 * OPTIONS for /
 */
plant.options("/", 
/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
(req, res) => {
  res.header('Access-Control-Allow-Methods', 'GET');
  res.send(200);
})

/**
 * @TODO
 * Return all plants
 */
plant.get("/", error501);

/**
 * OPTIONS for /:id
 */
 plant.options("/:id", 
 /**
  * 
  * @param {express.Request} req 
  * @param {express.Response} res 
  */
 (req, res) => {
   res.header('Access-Control-Allow-Methods', 'GET, DELETE, PUT, PATCH');
   res.send(200);
 })

/**
 * @TODO
 * Return a specific plant with her ID
 */
plant.get("/:id", error501);

/**
 * @TODO
 * Delete a specific plant with her ID
 */
plant.delete("/:id", error501);

/**
 * @TODO
 * Create or update a specific plant with her ID
 */
plant.put("/:id", error501);

/**
 * @TODO
 * Partial update a specific plant with her ID
 */
plant.patch("/:id", error501);

export default plant;