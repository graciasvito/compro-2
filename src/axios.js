//

// import axios from "axios";

// // "http://api-masukaja.starlinkintegrasi.co.id/api/"
// const instance = axios.create({
//   baseURL: "http://belunavis.starlinkintegrasi.co.id/",
//   timeout: 5000,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Create a function to refresh the token

// // Add an Axios response interceptor to automatically retry requests after token refresh
// instance.interceptors.response.use((response) => {
//   return response;
// });

// export default instance;
// axios
import axios from "axios";

export const baseURL = "http://api-limarempah.starlinkintegrasi.co.id/api/admin/";
//export const baseURL = "/api";

export const init = () => {
  return axios.create({
    baseURL: baseURL,
    // You can add your headers here
  });
};

export const setAuthorizationHeader = (instance) => {
  const accessToken = localStorage.getItem("accessToken");

  instance.interceptors.request.use(function (config) {
    // Set Authorization header if accessToken is available
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  });

  instance.interceptors.response.use(
    function (response) {
      // Do something with successful response
      return response;
    },
    function (error) {
      // Handle error responses
      if (error.response && error.response.status === 401) {
        // Unauthorized, delete all items from localStorage
        clearLocalStorage();
        redirectToLogout();
      }

      return Promise.reject(error);
    }
  );

  return instance;
};

const clearLocalStorage = () => {
  // Clear all items from localStorage
  localStorage.removeItem("accessToken");
  localStorage.removeItem("companyID");
  localStorage.removeItem("roleID");
};

const redirectToLogout = () => {
  // Redirect to the logout page
  window.location.href = "/pages/logout";
};

// export const setAuthorizationHeader = (instance) => {
//   const accessToken = localStorage.getItem("accessToken");
//   console.log(accessToken);
//   if (accessToken) {
//     console.log("Use Access Token On Request");
//     // Set the AUTH token for any request
//     instance.interceptors.request.use(function (config) {
//       if (accessToken) {
//         config.headers.Authorization = `Bearer ${accessToken}`;
//       } else {
//         localStorage.removeItem("accessToken");
//         localStorage.removeItem("userInfo");
//         window.location.href = "/pages/logout";
//       }
//       return config;
//     });

//     instance.interceptors.response.use(
//       function (response) {
//         //console.log('response :'+JSON.stringify(response))
//         /*if (response.data && !response.data.status) {
//                 window.location.href = '/pages/login';
//                 return Promise.reject(response.data.message);
//             }*/

//         return response;
//       },
//       function (error) {
//         console.log("error response code :" + error.response.status);
//         if (error.response && 401 === error.response.status) {
//           localStorage.clear();
//           window.location.href = "/pages/logout";
//         }
//         //         window.location.href = '/pages/error-404';
//         //         return Promise.reject(error);
//         //     }
//       }
//     );
//   }

//   return instance;
// };
