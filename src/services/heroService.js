import axios from "axios";

export const getHeroes = () => {
  return axios
    .get(
      "https://my-json-server.typicode.com/kkeeth/riot-tour-of-heroes/heroes"
    )
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.error(e);
    });
};
