const db = require("../config/dbConfig");

const checkRepository = {
  saveLog: (urlPath, status) => {
    return new Promise((resolve, reject) => {
      const query =
        "INSERT INTO results (url_path, status, dt_insert, dt_modified) VALUES (?, ?, NOW(), NOW())";

      db.query(query, [urlPath, status], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  },

  updateStatusByUrlPath: (urlPath, newStatus) => {
    return new Promise((resolve, reject) => {
      const query =
        "UPDATE results SET status = ?, dt_modified = NOW() WHERE url_path = ?";

      db.query(query, [newStatus, urlPath], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  },
};

module.exports = checkRepository;
