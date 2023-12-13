class Result {
  constructor(url_path, status, dt_insert, dt_modified) {
    this.url_path = url_path;
    this.status = status;
    this.dt_insert = dt_insert;
    this.dt_modified = dt_modified;
  }
}

module.exports = Result;
