import KBank from "../../../config/kbank.config";
import type {
  InquiryRequest,
  InquiryResponse,
} from "../../../types/kbank/inquiry";

async function InquiryQRPaid(request: InquiryRequest, access_token: string) {
  const BODY = JSON.stringify(request);

  const HEADERS = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
    "x-test-mode": "true",
    "env-id": "QR006",
  };

  const CONFIG = {
    method: "POST",
    headers: HEADERS,
    body: BODY,
  };

  const response = await fetch(KBank.INQUIRY_QR_PAID, CONFIG);

  const data = (await response.json()) as InquiryResponse;

  return data;
}

export { InquiryQRPaid };
