import type { Request, Response } from "express";

import { Oauth } from "../utils/kbank/oauth.util";
import { ThaiQR } from "../utils/kbank/thaiqr.util";

async function oauth(req: Request, res: Response) {
  const data = await Oauth();

  return res.status(200).json({ status: 200, error: false, message: data });
}

async function thaiqr(req: Request, res: Response) {
  const access_token = req.body.access_token;

  const request = {
    partnerTxnUid: "PARTNERTEST0001",
    partnerId: "PTR1051673",
    partnerSecret: "d4bded59200547bc85903574a293831b",
    requestDt: `${new Date().toISOString()}`,
    merchantId: "KB102057149704",
    qrType: "3",
    txnAmount: "1.10",
    txnCurrencyCode: "THB",
    reference1: "INV001",
    reference2: "HELLOWORLD",
    reference3: "INV001",
    reference4: "INV001",
  };

  const data = await ThaiQR(request, access_token);

  return res.status(200).json({ status: 200, error: false, message: data });
}

export { oauth, thaiqr };
