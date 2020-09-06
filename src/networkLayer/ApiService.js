import AxiosApiInstance from "./Api";

/**
 * 
 * @param {*} endPoint 
 * @param {*} service 
 * @param {*} headers 
 */
export function callGetAPI(endPoint, service, headers) {
  return new Promise((resolve, reject) => {
    AxiosApiInstance(endPoint, headers)
      .get(service)
      .then((response) => {
        if (response.status === 200) {
          resolve(response.data);
        }
      })
      .catch((error) => {
        if (error && error.response) {
          reject(error.response.data);
        }
      });
  });
}

/**
 * 
 * @param {*} endPoint 
 * @param {*} service 
 * @param {*} requestPayload 
 * @param {*} headers 
 */
export function callPostAPI(
    endPoint,
    service,
    requestPayload,
    headers
  ) {
    return new Promise((resolve, reject) => {
      AxiosApiInstance(endPoint, headers)
        .post(service, requestPayload)
        .then((response) => {
          if (response.status === 200) {
              resolve(response.data);
          }
        })
        .catch((error) => {
           // ToDo: Improve error handling once we have more clarity for apis
        if (error && error.response) {
            console.log("Error received in API");
          }
        });
    });
  }
