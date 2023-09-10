import type { Request, Response } from "express";
import httpCode from "../constants/http.code.constant";
import httpReason from "../constants/http.reason.constant";

function hello(req: Request, res: Response) {
  return res
    .status(httpCode.OK)
    .json({ status: httpCode.OK, error: false, message: httpReason.OK });
}

export { hello };
