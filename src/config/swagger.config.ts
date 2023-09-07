import { Options } from "swagger-jsdoc";

const swaggerOptions: Options = {
  definition: {
    info: {
      title: "express typescript boilerplate",
      version: "1.0.0",
      description: "A boilerplate for express typescript",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Krit Kasemtewin",
        url: "https://github.com/Fakepng",
        email: "contact@fakepng.com",
      },
    },
    produces: ["application/json"],
  },
  apis: ["./src/routes/*.ts"],
};

export { swaggerOptions };
