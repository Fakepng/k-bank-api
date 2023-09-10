import KBank from "../../config/kbank.config";

async function SSLHandShake(access_token: string) {
  const HEADERS = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
    "x-test-mode": "true",
  };

  const CONFIG = {
    method: "POST",
    headers: HEADERS,
  };

  const response = await fetch(KBank.SSL_HANDSHAKE, CONFIG);

  try {
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return response;
  }
}

export { SSLHandShake };
