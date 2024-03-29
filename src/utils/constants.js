
export const ENV = {
    //BASE_PATH: `https://kaapa-backend.azurewebsites.net/`,
    //BASE_API: `https://kaapa-backend.azurewebsites.net/api/v1`,
    BASE_PATH: `http://localhost:8080`,
    BASE_API: `http://localhost:8080/api/v1`,
    API_ROUTES:{
        REGISTER: "auth/register",
        LOGIN: "auth/login",
        REFRESH_ACCESS_TOKEN: "auth/refresh_acces_token",
        USER_ME: "user/me",
        USER: "user",
        USERS: "users",
        MENU: "menu",
        COURSE: "course",
        NEWSLETTER: "newsletter",
        BLOG: "post",
        MAG: "mag",
        OPE: "ope",
        COME: "come"
    },
    JWT: {
        ACCESS: "access",
        REFRESH: "refresh",
    },
}