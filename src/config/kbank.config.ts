const KBank = {
  OAUTH: "https://openapi-sandbox.kasikornbank.com/v2/oauth/token",
  GENERATE_THAI_QR_CODE:
    "https://openapi-sandbox.kasikornbank.com/v1/qrpayment/request",
  GENERATE_QR_CREDIT_CARD:
    "https://openapi-sandbox.kasikornbank.com/v1/qrpayment/request,",
  INQUIRY_QR_REQUESTED:
    "https://openapi-sandbox.kasikornbank.com/v1/qrpayment/v4/inquiry",
  INQUIRY_QR_CANCELLED:
    "https://openapi-sandbox.kasikornbank.com/v1/qrpayment/v4/inquiry",
  INQUIRY_QR_PAID:
    "https://openapi-sandbox.kasikornbank.com/v1/qrpayment/v4/inquiry",
  INQUIRY_QR_VOIDED:
    "https://openapi-sandbox.kasikornbank.com/v1/qrpayment/v4/inquiry",
  CANCEL_QR_REQUESTED:
    "https://openapi-sandbox.kasikornbank.com/v1/qrpayment/cancel",
  CANCEL_QR_PAID:
    "https://openapi-sandbox.kasikornbank.com/v1/qrpayment/cancel",
  CANCEL_QR_VOIDED:
    "https://openapi-sandbox.kasikornbank.com/v1/qrpayment/cancel",
  VOID_PAID: "https://openapi-sandbox.kasikornbank.com/v1/qrpayment/void",
  VOID_QR_CREDIT: "https://openapi-sandbox.kasikornbank.com/v1/qrpayment/void",
  VOID_NOT_PAID: "https://openapi-sandbox.kasikornbank.com/v1/qrpayment/void",
  VOID_SETTLEMENT: "https://openapi-sandbox.kasikornbank.com/v1/qrpayment/void",
  VOID_OVER_THE_DAY:
    "https://openapi-sandbox.kasikornbank.com/v1/qrpayment/void",
  SSL_HANDSHAKE: "https://openapi-test.kasikornbank.com/exercise/ssl",
} as const;

export default KBank;
