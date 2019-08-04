import { request } from "./request";

export const get = () =>
  request("GET", "https://jsonplaceholder.typicode.com/comments");
