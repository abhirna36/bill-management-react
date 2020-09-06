import axios from 'axios';

/**
 * function to return the API instance with base url
 */
const AxiosApiInstance = (apiEndPoint, headers) => {
  const axiosInstance = axios.create({
    baseURL: apiEndPoint,
    headers: headers
  });
  return axiosInstance;
};

export default AxiosApiInstance;

