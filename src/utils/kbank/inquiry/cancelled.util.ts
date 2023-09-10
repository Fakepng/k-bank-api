import KBank from "../../../config/kbank.config";
import type {
  InquiryRequest,
  InquiryResponse,
} from "../../../types/kbank/inquiry";

async function InquiryQRCancelled(
  request: InquiryRequest,
  access_token: string
) {
  const BODY = JSON.stringify(request);

  const HEADERS = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
    "x-test-mode": "true",
    "env-id": "QR005",
  };

  const CONFIG = {
    method: "POST",
    headers: HEADERS,
    body: BODY,
  };

  const response = await fetch(KBank.INQUIRY_QR_CANCELLED, CONFIG);

  const data = (await response.json()) as InquiryResponse;

  return data;
}

export { InquiryQRCancelled };
