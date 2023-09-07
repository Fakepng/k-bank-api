function checkENV() {
  const env = process.env;

  const errors: string[] = [];

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
