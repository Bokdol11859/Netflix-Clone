import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "c80c1b110217666d72db5bb84f7ad9d4",
    language: "ko-KR",
  },
});

export default instance;
