import type { Request, Response } from "express";
import httpCode from "../../../constants/http.code.constant";

import { ThaiQR } from "../../../utils/kbank/generate/thaiqr.util";

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

  return res
    .status(httpCode.OK)
    .json({ status: httpCode.OK, error: false, message: data });
}

export { thaiqr };
