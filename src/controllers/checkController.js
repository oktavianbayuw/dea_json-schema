const checkRepository = require("../repositories/checkRepository");
const validate = require("../validate");

const checkController = {
  validateAndSave: (req, res) => {
    const data = req.body;
    const isValid = validate(data);

    if (isValid) {
      checkRepository
        .updateStatusByUrlPath(req.path, true)
        .then(() =>
          res.json({
            status: true,
            message: "Data Valid.",
          })
        )
        .catch((error) => res.status(500).json({ error: error.message }));
    } else {
      checkRepository
        .updateStatusByUrlPath(req.path, false)
        .then(() =>
          res.status(400).json({ status: false, error: "Data tidak valid." })
        )
        .catch((error) => res.status(500).json({ error: error.message }));
    }
  },
};

module.exports = checkController;
