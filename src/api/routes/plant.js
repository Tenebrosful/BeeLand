import express from "express";
import { getBDD } from "../../database/database.js";
import { Plant } from "../../database/models/Plant.js";
import error501 from "../errors/error501.js";
const plant = express.Router();

const bdd = getBDD();

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
plant.get("/", async (req, res, next) => {
  try {
    const allPlants = await Plant.findAll();
    res.status(200).json(allPlants);
  } catch (error) {
    next(error);
  }

});

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
plant.get("/:id", async (req, res, next) => {
  try {
    const plantid = await Plant.findOne({ where: { id: req.params.id } });

    if (!plantid) {
      res.status(404).json({
        code: 404,
        message: `Not plant found with id ${req.params.id}`
      });
      return;
    }

    res.status(200).json(plantid);

  } catch (error) {
    next(error);
  }
});

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