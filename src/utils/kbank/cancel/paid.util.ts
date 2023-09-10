import KBank from "../../../config/kbank.config";
import type {
  CancelRequest,
  CancelResponse,
} from "../../../types/kbank/cancel";

async function CancelQRPaid(request: CancelRequest, access_token: string) {
  const BODY = JSON.stringify(request);

  const HEADERS = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
    "x-test-mode": "true",
    "env-id": "QR010",
  };

  const CONFIG = {
    method: "POST",
    headers: HEADERS,
    body: BODY,
  };

  const response = await fetch(KBank.CANCEL_QR_PAID, CONFIG);

  const data = (await response.json()) as CancelResponse;

  return data;
}

export { CancelQRPaid };
