import KBank from "../../config/kbank.config";
import type { ThaiQRRequest, ThaiQRResponse } from "../../types/kbank/thaiqr.d";

async function ThaiQR(request: ThaiQRRequest, access_token: string) {
  const BODY = JSON.stringify(request);

  const HEADERS = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
    "x-test-mode": "true",
    "env-id": "QR002",
  };

  const CONFIG = {
    method: "POST",
    headers: HEADERS,
    body: BODY,
  };

  const response = await fetch(KBank.thaiQR, CONFIG);

  const data = (await response.json()) as ThaiQRResponse;

  return data;
}

export { ThaiQR };
