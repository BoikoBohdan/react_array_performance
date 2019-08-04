import axios from "axios";

export const request = (method, url) => {
  return axios({ method, url });
};
