type CancelRequest = {
  partnerTxnUid: string;
  partnerId: string;
  partnerSecret: string;
  requestDt: string;
  merchantId: string;
  terminalId?: string;
  origPartnerTxnUid: string;
};

type CancelResponse = {
  partnerTxnUid: string;
  partnerId: string;
  statusCode: string;
  errorCode?: string;
  errorDesc?: string;
};

export { CancelRequest, CancelResponse };
