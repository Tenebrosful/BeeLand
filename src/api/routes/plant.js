import express from "express";
import error501 from "../errors/error501.js";
const plant = express.Router();

/**
 * @TODO
 * Return all plants
 */
plant.get("/", error501);

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