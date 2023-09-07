/**
 * @openapi
 * /:
 *   get:
 *     summary: Base path.
 *     tags:
 *       - Base path
 *     responses:
 *       200:
 *         description: Hello!
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: integer
 *               default: 200
 *             error:
 *               type: boolean
 *               default: false
 *             message:
 *               type: string
 *               default: Hello!
 *
 */

import { Router } from "express";

import { hello } from "../controllers/base.controller";
import { oauth, thaiqr } from "../controllers/kbank.controller";

const router = Router();

router.get("/", hello);
router.get("/oauth", oauth);
router.post("/thaiqr", thaiqr);

export default router;
