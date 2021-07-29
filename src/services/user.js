import axios from "./myAxios";

export function login(data) {
  return axios().post("/user/login", data);
}
