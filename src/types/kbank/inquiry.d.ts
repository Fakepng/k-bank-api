type InquiryRequest = {
  partnerTxnUid: string;
  partnerId: string;
  partnerSecret: string;
  requestDt: string;
  merchantId: string;
  terminalId?: string;
  origPartnerTxnUid: string;
  txnNo?: string;
};

type InquiryResponse = {
  partnerTxnUid: string;
  partnerId: string;
  statusCode: string;
  errorCode?: string;
  errorDesc?: string;
  txnStatus?: string;
  txnNo?: string;
  loyaltyId?: string;
  cardScheme?: string;
  cardNo?: string;
  approvalCode?: string;
  additionalTxnNo?: string[];
  channel: string;
  merchantId: string;
  terminalId?: string;
  qrType: string;
  txnAmount: string;
  txnCurrencyCode: string;
  reference1: string;
  reference2: string;
  reference3: string;
  reference4: string;
};

export { InquiryRequest, InquiryResponse };
