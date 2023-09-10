import type { Request, Response } from "express";
import httpCode from "../../constants/http.code.constant";

import { Oauth } from "../../utils/kbank/oauth.util";
import { SSLHandShake } from "../../utils/kbank/ssl.util";

async function oauth(req: Request, res: Response) {
  const data = await Oauth();

  return res
    .status(httpCode.OK)
    .json({ status: httpCode.OK, error: false, message: data });
}

async function ssl(req: Request, res: Response) {
  const access_token = req.body.access_token;
  const data = await SSLHandShake(access_token);

  return res
    .status(httpCode.OK)
    .json({ status: httpCode.OK, error: false, message: data });
}

export { oauth, ssl };
