const apiAdapter = require("../../apiAdapter");
const { URL_SERVICE_MEDIA } = process.env;

module.exports = async (req, res) => {
  const api = apiAdapter(URL_SERVICE_MEDIA);

  console.log("Data ApI", api);
  try {
    const media = await api.get("http://localhost:8080/media");

    console.log("Media ================ ", media);
    return res.json(media.data);
  } catch (error) {
    if (error.code === "ENOTFOUND" || error.code === "ECONNREFUSED") {
      return res
        .status(500)
        .json({ status: "error", message: "Servicce Invalible" });
    }

    // const { status, data } = error.response;

    return res.status(400).json(error);
  }
};
