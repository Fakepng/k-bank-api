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
import { oauth, ssl } from "../controllers/kbank/kbank.controller";

import { thaiqr } from "../controllers/kbank/generate/thaiqr.controller";
import { qrcredit } from "../controllers/kbank/generate/qrcredit.controller";

import { inquiryQRRequested } from "../controllers/kbank/inquiry/requested.controller";
import { inquiryQRCancelled } from "../controllers/kbank/inquiry/cancelled.controller";
import { inquiryQRPaid } from "../controllers/kbank/inquiry/paid.controller";
import { inquiryQRVoided } from "../controllers/kbank/inquiry/voided.controller";

import { cancelQRRequested } from "../controllers/kbank/cancel/requested.controller";
import { cancelQRPaid } from "../controllers/kbank/cancel/paid.controller";
import { cancelQRVoided } from "../controllers/kbank/cancel/voided.controller";

import { voidPaymentPaid } from "../controllers/kbank/void/paid.controller";
import { voidPaymentQRCredit } from "../controllers/kbank/void/qrcredit.controller";
import { voidPaymentNotPaid } from "../controllers/kbank/void/notpaid.controller";
import { voidPaymentSettlement } from "../controllers/kbank/void/settlement.controller";
import { voidPaymentOverTheDay } from "../controllers/kbank/void/overtheday.controller";

const router = Router();

router.get("/", hello);
router.get("/oauth", oauth);
router.post("/ssl", ssl);

router.post("/generate/thaiqr", thaiqr);
router.post("/generate/qrcredit", qrcredit);

router.post("/inquiry/requested", inquiryQRRequested);
router.post("/inquiry/cancelled", inquiryQRCancelled);
router.post("/inquiry/paid", inquiryQRPaid);
router.post("/inquiry/voided", inquiryQRVoided);

router.post("/cancel/requested", cancelQRRequested);
router.post("/cancel/paid", cancelQRPaid);
router.post("/cancel/voided", cancelQRVoided);

router.post("/void/paid", voidPaymentPaid);
router.post("/void/qrcredit", voidPaymentQRCredit);
router.post("/void/notpaid", voidPaymentNotPaid);
router.post("/void/settlement", voidPaymentSettlement);
router.post("/void/overtheday", voidPaymentOverTheDay);

export default router;
