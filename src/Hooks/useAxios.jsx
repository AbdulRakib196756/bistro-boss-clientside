import axios from "axios";

export const secureaxioslink = axios.create({
  baseURL: "http://localhost:5000/api/v1/",
});

const useAxiosSecure = () => {
  return secureaxioslink;
};

export default useAxiosSecure;
