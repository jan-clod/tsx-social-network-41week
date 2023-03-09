import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": " ad5c7de6-7cc4-452c-957a-f645c63594a0",
  },
});
let newApiKey = "ad5c7de6-7cc4-452c-957a-f645c63594a0"
let oldApiKey = "9ccf0b02-7ebc-48a8-afa1-03312505ce4a"


export const usersApi = {
  getUsers(currentPage: number, pageSize: number) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  followUsers(id: string) {
    return instance.post(`follow/${id}`);
  },
  unfollowUsers(id: string) {
    return instance.delete(`follow/${id}`);
  },
  getProfile(userId: number) {
    return instance.get(`profile/` + userId);
  },
};
export const authApi = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email : string, password : string, rememberme = false) {
    return instance.post(`auth/login`, {email, password, rememberme})
  },
  logout() {
    alert('qwqwd')
    return instance.delete(`auth/login`)
  }
};
export const profileApi = {
  getProfile(userId: number) {
    return usersApi.getProfile(userId)
  },
  getStatus(userId: number) {
    return instance.get( `profile/status/` + userId)
  },
  updateStatus(statut:string) {
    return instance.put(`profile/status/`, {status: statut} )
  }
};
