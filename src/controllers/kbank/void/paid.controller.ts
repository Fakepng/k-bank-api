import type { Request, Response } from "express";
import httpCode from "../../../constants/http.code.constant";

import { VoidPaymentPaid } from "../../../utils/kbank/void/paid.util";

async function voidPaymentPaid(req: Request, res: Response) {
  const access_token = req.body.access_token;

  const request = {
    partnerTxnUid: "PARTNERTEST0009",
    partnerId: "PTR1051673",
    partnerSecret: "d4bded59200547bc85903574a293831b",
    requestDt: `${new Date().toISOString()}`,
    merchantId: "KB102057149704",
    origPartnerTxnUid: "PARTNERTEST0011",
  };

  const data = await VoidPaymentPaid(request, access_token);

  return res
    .status(httpCode.OK)
    .json({ status: httpCode.OK, error: false, message: data });
}

export { voidPaymentPaid };
