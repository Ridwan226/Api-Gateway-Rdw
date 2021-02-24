const axios = require("axios");
const { TIMEOUT } = process.env;

module.exports = (baseUrl) => {
  return axios.created({
    baseUrl: baseUrl,
    timeout: TIMEOUT,
  });
};
