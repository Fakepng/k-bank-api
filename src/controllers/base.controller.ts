import type { Request, Response } from "express";

function hello(req: Request, res: Response) {
  return res.status(200).json({ status: 200, error: false, message: "Hello!" });
}

export { hello };
