const db = require("../config/dbConfig");

const checkRepository = {
  saveLog: (urlPath, status, jsonSchema) => {
    return new Promise((resolve, reject) => {
      const query =
        "INSERT INTO results (url_path, status, dt_insert, dt_modified, json_schema) VALUES (?, ?, NOW(), NOW(), ?)";

      db.query(query, [urlPath, status, jsonSchema], (error, results) => {
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
      const dbStatus = newStatus ? 1 : 0;

      const updateQuery =
        "UPDATE results SET status = ?, dt_modified = NOW() WHERE url_path = ?";
      db.query(
        updateQuery,
        [dbStatus, urlPath],
        (updateError, updateResults) => {
          if (updateError) {
            reject(updateError);
          } else {
            resolve(updateResults);
          }
        }
      );
    });
  },

  getDataByUrlPath: (urlPath) => {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM results WHERE url_path = ?";
      db.query(query, [urlPath], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results[0]); // Mengembalikan data pertama (jika ada)
        }
      });
    });
  },
};

module.exports = checkRepository;
