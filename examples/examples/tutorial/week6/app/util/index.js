

module.exports = {
  get format_currency() { return require("./format_currency.js") },
  get http_get() { return require("./http.js").http_get},
  get http_post() { return require("./http.js").http_post},
  get http_put() { return require("./http.js").http_put},
  get http_delete() { return require("./http.js").http_delete},
  get path_join() { return require("./path_join.js") },
}
  