const apiAdapter = require("../../apiAdapter");
const { URL_SERVICE_MEDIA } = process.env;

module.exports = async (req, res) => {
  const api = apiAdapter(URL_SERVICE_MEDIA);

  try {
    const id = req.params.id;
    const media = await api.delete(`http://localhost:8080/media/${id}`);

    return res.json(media.data);
  } catch (error) {
    if (error.code === "ENOTFOUND" || error.code === "ECONNREFUSED") {
      return res
        .status(500)
        .json({ status: "error", message: "Servicce Invalible" });
    }

    const { status, data } = error.response;

    return res.status(status).json(data);
  }
};
