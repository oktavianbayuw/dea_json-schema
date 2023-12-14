const checkRepository = require("../repositories/checkRepository");
const validate = require("../validate");

const checkController = {
  validateAndSave: async (req, res) => {
    const { url_path, jsonData, jsonSchema } = req.body;

    try {
      // Parse JSON data and validate against the provided schema
      const data = jsonData;
      const schemaIsValid = validate(data, jsonSchema);

      if (!schemaIsValid) {
        return res.status(400).json({
          status: false,
          error: "JSON data does not match the provided schema.",
        });
      }

      // Check if URL path already exists in the database
      const existingData = await checkRepository.getDataByUrlPath(url_path);

      if (existingData) {
        // If URL path exists, update the status
        checkRepository
          .updateStatusByUrlPath(url_path, true)
          .then(() => res.json({ status: true, message: "Data Valid." }))
          .catch((error) => res.status(500).json({ error: error.message }));
      } else {
        // If URL path doesn't exist, insert new data
        checkRepository
          .saveLog(url_path, true, jsonSchema)
          .then(() => res.json({ status: true, message: "Data Valid." }))
          .catch((error) => res.status(500).json({ error: error.message }));
      }
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = checkController;
