import KBank from "../../../config/kbank.config";
import type {
  ThaiQRRequest,
  ThaiQRResponse,
} from "../../../types/kbank/thaiqr";

async function QRCredit(request: ThaiQRRequest, access_token: string) {
  const BODY = JSON.stringify(request);

  const HEADERS = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
    "x-test-mode": "true",
    "env-id": "QR003",
  };

  const CONFIG = {
    method: "POST",
    headers: HEADERS,
    body: BODY,
  };

  const response = await fetch(KBank.GENERATE_QR_CREDIT_CARD, CONFIG);

  const data = (await response.json()) as ThaiQRResponse;

  return data;
}

export { QRCredit };
