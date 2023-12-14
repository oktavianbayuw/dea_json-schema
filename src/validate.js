const Ajv = require("ajv");

const schemaMerchant = {
  type: "object",
  properties: {
    responseCode: { type: "string" },
    responseMessage: { type: "string" },
    referenceNo: { type: "string" },
    partnerReferenceNo: { type: "string" },
    additionalInfo: {
      type: "object",
      properties: {
        amount: { type: "string" },
        currency: { type: "string" },
        merchantTrxId: { type: "string" },
        remarks: { type: "string" },
      },
      required: ["amount", "currency", "merchantTrxId", "remarks"],
    },
  },
  required: [
    "responseCode",
    "responseMessage",
    "referenceNo",
    "partnerReferenceNo",
    "additionalInfo",
  ],
};

const ajv = new Ajv({ allErrors: true });
const validate = ajv.compile(schemaMerchant);

module.exports = validate;
