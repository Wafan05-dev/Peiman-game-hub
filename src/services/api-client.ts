import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5703b44f0f7041c1b1316c8f09be6660",
  },
});
