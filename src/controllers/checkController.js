const checkRepository = require("../repositories/checkRepository");
const validate = require("../validate");

const checkController = {
  validateAndSave: (req, res) => {
    const data = req.body;

    const isValid = validate(data);

    if (isValid) {
      checkRepository
        .saveLog("path_check", true)
        .then(() => {
          return checkRepository.updateStatusByUrlPath("path_check", true);
        })
        .then(() =>
          res.json({
            status: true,
            message: "Data berhasil disimpan dan status diperbarui.",
          })
        )
        .catch((error) => res.status(500).json({ error: error.message }));
    } else {
      checkRepository
        .saveLog("path_check", false)
        .then(() => {
          return checkRepository.updateStatusByUrlPath("path_check", false);
        })
        .then(() =>
          res.status(400).json({ status: false, error: "Data tidak valid." })
        )
        .catch((error) => res.status(500).json({ error: error.message }));
    }
  },
};

module.exports = checkController;
