import dotenv from "dotenv";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import { checkENV } from "./utils/environment.util";
import { corsOptions } from "./config/cors.config";
import { swaggerOptions } from "./config/swagger.config";
import basePath from "./routes/base.route";

dotenv.config();
checkENV();

const app = express();
const specs = swaggerJsdoc(swaggerOptions);

app.use(helmet()); //Security
app.disable("x-powered-by"); //Reduce Fingerprinting

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json());

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.use("/", basePath);

if (process.env.NODE_ENV !== "production") {
  console.log("Swagger UI is running at /api-docs");
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
  );
}

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send("Sorry can't find that!");
});

app.listen(parseInt(process.env.PORT || "3000"), () => {
  console.log(`Server running at port ${process.env.PORT || "3000"} 🚀`);
});
