declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      K_BANK_CONSUMER_ID: string;
      K_BANK_CONSUMER_SECRET: string;
      K_BANK_ISSUED: string;
    }
  }
}

export {};
