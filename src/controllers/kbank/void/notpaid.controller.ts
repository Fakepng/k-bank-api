import type { Request, Response } from "express";
import httpCode from "../../../constants/http.code.constant";

import { VoidPaymentNotPaid } from "../../../utils/kbank/void/notpaid.util";

async function voidPaymentNotPaid(req: Request, res: Response) {
  const access_token = req.body.access_token;

  const request = {
    partnerTxnUid: "PARTNERTEST0010",
    partnerId: "PTR1051673",
    partnerSecret: "d4bded59200547bc85903574a293831b",
    requestDt: `${new Date().toISOString()}`,
    merchantId: "KB102057149704",
    origPartnerTxnUid: "PARTNERTEST0017",
  };

  const data = await VoidPaymentNotPaid(request, access_token);

  return res
    .status(httpCode.OK)
    .json({ status: httpCode.OK, error: false, message: data });
}

export { voidPaymentNotPaid };
