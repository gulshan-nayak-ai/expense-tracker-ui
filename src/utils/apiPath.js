export const BASE_URL = "http://localhost:8080";

export const API_PATHS = {
    AUTH: {
        LOGIN : "/auth/login",
        REGISTER: "/api/v1/auth/register",
        GET_USER_INFO: "/api/v1/auth/getUser"
    },

    INCOME:{
        ADD_INCOME : "/api/v1/income/add",
        REGISTER: "/api/v1/income/get",
        DELETE_INCOME: (incomeid) => `/api/v1/income/${incomeid}`
    }
        
}