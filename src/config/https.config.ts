import { ServerOptions } from "https";
import path from "path";
import { readFileSync } from "fs";

const folder = path.join(process.cwd(), "src", "certs");

const https_options: ServerOptions = {
  key: readFileSync(path.join(folder, "ssl_private.key")),
  cert: readFileSync(path.join(folder, "ssl.crt")),
};

export { https_options };
