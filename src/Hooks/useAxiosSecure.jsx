import axios from "axios"

export const axiossecure=axios.create({
    baseURL:'http://localhost:5000'
})
export const useAxiosSecure = () => {
    // Request interceptor to add authorization header for every secure call for api
 axiossecure.interceptors.request.use(function(config){
    const token=localStorage.getItem("access-token")
    console.log("Request stopped by interceptors",token);
    config.headers.authorization=`Bearer ${token}`;
    return config
 },
 function (error) {
    // Do something with request error
    return Promise.reject(error);
  })


  // Add a response interceptor
  axiossecure.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const status=error.response.status;
    console.log("Status Error in Interceptor",status);
    return Promise.reject(error);
  });
 return axiossecure;
}
