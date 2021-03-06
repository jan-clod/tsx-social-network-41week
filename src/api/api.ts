import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": " 9ccf0b02-7ebc-48a8-afa1-03312505ce4a",
  },
});

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
};

/* 
  const authApi: {
    me(): Promise<AxiosResponse<any, any>>;
  }
*/
