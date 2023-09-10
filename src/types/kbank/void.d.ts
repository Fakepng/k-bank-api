type VoidPaymentRequest = {
  partnerTxnUid: string;
  partnerId: string;
  partnerSecret: string;
  requestDt: string;
  merchantId: string;
  terminalId?: string;
  origPartnerTxnUid: string;
  txnNo?: string;
};

type VoidPaymentResponse = {
  partnerTxnUid: string;
  partnerId: string;
  statusCode: string;
  errorCode?: string;
  errorDesc?: string;
  txnNo?: string;
};

export { VoidPaymentRequest, VoidPaymentResponse };
