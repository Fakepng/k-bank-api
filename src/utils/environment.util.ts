function checkENV() {
  const env = process.env;

  const errors: string[] = [];

  if (!env.K_BANK_CONSUMER_ID) {
    errors.push("K_BANK_CONSUMER_ID is not set");
  }

  if (!env.K_BANK_CONSUMER_SECRET) {
    errors.push("K_BANK_CONSUMER_SECRET is not set");
  }

  if (!env.K_BANK_ISSUED) {
    errors.push("K_BANK_ISSUED is not set");
  }

  if (errors.length > 0) {
    console.error("Environment variables are not set ❌");
    throw new Error(errors.join("\n"));
  }

  if (env.NODE_ENV !== "production") {
    console.warn("Environment is not production ❗");
  }

  console.log("Environment variables are all set ✅");
}

export { checkENV };
