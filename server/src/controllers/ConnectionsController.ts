import { Request, Response } from "express";
import db from "../database/connection";

export default new (class ConnectionController {
  async index(request: Request, response: Response) {
    const totalConnections = await db("connections").count("* as total");

    const { total } = totalConnections[0];

    return response.json({ total });
  }

  async store(request: Request, response: Response) {
    const { user_id } = request.body;

    try {
      await db("connections").insert({ user_id });

      return response.status(201).json({ message: "Registration success!" });
    } catch (error) {
      return response.status(400).json({
        error: "Unexpected error",
      });
    }
  }
})();
