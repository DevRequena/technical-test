import axiosCreateContext from "./axiosCreateContext";

export default {
  auth: {
    login(credentials) {
      return axiosCreateContext.post('/login', credentials)
    }
  },
  users: {
    getUsers() {
      return axiosCreateContext.get('/users')
    }
  }
}