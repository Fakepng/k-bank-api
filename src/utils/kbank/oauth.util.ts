import KBank from "../../config/kbank.config";
import type { OauthResponse } from "../../types/kbank/oauth.d";

async function Oauth() {
  const CONSUMER_ID = process.env.K_BANK_CONSUMER_ID;
  const CONSUMER_SECRET = process.env.K_BANK_CONSUMER_SECRET;

  const BASE64_AUTH = btoa(`${CONSUMER_ID}:${CONSUMER_SECRET}`);

  const BODY = new URLSearchParams({
    grant_type: "client_credentials",
  });

  const HEADERS = {
    Authorization: `Basic ${BASE64_AUTH}`,
    "Content-Type": "application/x-www-form-urlencoded",
    "x-test-mode": "true",
    "env-id": "OAUTH2",
  };

  const CONFIG = {
    method: "POST",
    headers: HEADERS,
    body: BODY,
  };

  const response = await fetch(KBank.oauth, CONFIG);

  const data = (await response.json()) as OauthResponse;

  return data;
}

export { Oauth };
