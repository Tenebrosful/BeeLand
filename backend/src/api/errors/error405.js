import express from "express";

/**
 * Error 405 "Method Not Allowed"
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
export default function error405(req, res) {
  res.status(405).json({
    code: 405,
    message: "Méthode non-autorisée"
  });
}