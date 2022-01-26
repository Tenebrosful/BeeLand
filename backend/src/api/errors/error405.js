import { Request, Response } from "express";

/**
 * Error 405 "Method Not Allowed"
 * @param {Request} req
 * @param {Response} res
 */
export default function error405(req, res) {
  res.status(405).json({
    code: 405,
    message: "Méthode non-autorisée"
  });
}