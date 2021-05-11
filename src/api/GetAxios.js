import Send from "../utils/Send.js";

export const GetAxios = {
  getData(currentPage) {
    return Send({
      url: `/data/data.json`,
      method: "get",
    });
  },
};

export default GetAxios;
