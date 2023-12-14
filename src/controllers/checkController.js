const checkRepository = require("../repositories/checkRepository");
const validate = require("../validate");

const checkController = {
  validateAndSave: (req, res) => {
    const data = req.body;
    const isValid = validate(data);
    console.log(data);
    if (isValid) {
      console.log(true);
      checkRepository
      .saveLog(req.path, true)
      .then(() => {
        return checkRepository.updateStatusByUrlPath(req.path, true);
      })
      .then(() =>
        res.json({
          status: true,
          message: "Data Valid.",
        })
      )
      .catch((error) => res.status(500).json({ error: error.message }));
  } else {
    console.log(false);
    checkRepository
    .saveLog(req.path, false)
    .then(() => {
      return checkRepository.updateStatusByUrlPath(req.path, false);
    })
    .then(() =>
      res.status(400).json({ status: false, error: "Data tidak valid." })
    )
    .catch((error) => res.status(500).json({ error: error.message }));
}
},
};


module.exports = checkController;
