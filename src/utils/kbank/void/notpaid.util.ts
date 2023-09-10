import KBank from "../../../config/kbank.config";
import {
  VoidPaymentRequest,
  VoidPaymentResponse,
} from "../../../types/kbank/void";

async function VoidPaymentNotPaid(
  request: VoidPaymentRequest,
  access_token: string
) {
  const BODY = JSON.stringify(request);

  const HEADERS = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
    "x-test-mode": "true",
    "env-id": "QR014",
  };

  const CONFIG = {
    method: "POST",
    headers: HEADERS,
    body: BODY,
  };

  const response = await fetch(KBank.VOID_NOT_PAID, CONFIG);

  const data = (await response.json()) as VoidPaymentResponse;

  return data;
}

export { VoidPaymentNotPaid };
