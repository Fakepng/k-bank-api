import KBank from "../../../config/kbank.config";
import {
  VoidPaymentRequest,
  VoidPaymentResponse,
} from "../../../types/kbank/void";

async function VoidPaymentOverTheDay(
  request: VoidPaymentRequest,
  access_token: string
) {
  const BODY = JSON.stringify(request);

  const HEADERS = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
    "x-test-mode": "true",
    "env-id": "QR016",
  };

  const CONFIG = {
    method: "POST",
    headers: HEADERS,
    body: BODY,
  };

  const response = await fetch(KBank.VOID_OVER_THE_DAY, CONFIG);

  const data = (await response.json()) as VoidPaymentResponse;

  return data;
}

export { VoidPaymentOverTheDay };
