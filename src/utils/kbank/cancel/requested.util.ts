import KBank from "../../../config/kbank.config";
import { CancelRequest, CancelResponse } from "../../../types/kbank/cancel";

async function CancelQRRequested(request: CancelRequest, access_token: string) {
  const BODY = JSON.stringify(request);

  const HEADERS = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
    "x-test-mode": "true",
    "env-id": "QR008",
  };

  const CONFIG = {
    method: "POST",
    headers: HEADERS,
    body: BODY,
  };

  const response = await fetch(KBank.CANCEL_QR_REQUESTED, CONFIG);

  const data = (await response.json()) as CancelResponse;

  return data;
}

export { CancelQRRequested };
