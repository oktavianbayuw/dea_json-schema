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
      const dbStatus = newStatus ? 1 : 0;

      const selectQuery = "SELECT * FROM results WHERE url_path = ?";
      db.query(selectQuery, [urlPath], (selectError, selectResults) => {
        if (selectError) {
          reject(selectError);
        } else {
          if (selectResults.length > 0) {
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
          } else {
            checkRepository
              .saveLog(urlPath, newStatus)
              .then(resolve)
              .catch(reject);
          }
        }
      });
    });
  },
};

module.exports = checkRepository;
