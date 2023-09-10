import type { Request, Response } from "express";
import httpCode from "../../../constants/http.code.constant";

import { CancelQRPaid } from "../../../utils/kbank/cancel/paid.util";

async function cancelQRPaid(req: Request, res: Response) {
  const access_token = req.body.access_token;

  const request = {
    partnerTxnUid: "PARTNERTEST0007",
    partnerId: "PTR1051673",
    partnerSecret: "d4bded59200547bc85903574a293831b",
    requestDt: `${new Date().toISOString()}`,
    merchantId: "KB102057149704",
    origPartnerTxnUid: "PARTNERTEST0007",
  };

  const data = await CancelQRPaid(request, access_token);

  return res
    .status(httpCode.OK)
    .json({ status: httpCode.OK, error: false, message: data });
}

export { cancelQRPaid };
