type ThaiQRRequest = {
  partnerTxnUid: string;
  partnerId: string;
  partnerSecret: string;
  requestDt: string;
  merchantId: string;
  terminalId?: string;
  qrType: string;
  txnAmount: string;
  txnCurrencyCode: string;
  reference1: string;
  reference2?: string;
  reference3?: string;
  reference4?: string;
  metadata?: string;
};

type ThaiQRResponse = {
  partnerTxnUid: string;
  partnerId: string;
  statusCode: string;
  errorCode?: string;
  errorDesc?: string;
  accountName: string;
  qrCode: string;
  sof: string[];
};

export type { ThaiQRRequest, ThaiQRResponse };
