import axios from "axios";
// import config from "../config/config"


// axios.defaults.baseURL = 'http://localhost:3001';
// console.log(config.serverHost)

export default {
  // Gets all students
  getStudents: function () {
    return axios.get(`/api/students`);
  },
  // Gets the student with the given id
  getStudent: function (id) {
    return axios.get("/api/students/" + id);
  },
  // Deletes the student with the given id
  deleteStudent: function (id) {
    return axios.delete("/api/students/" + id);
  },
  // Saves a student to the database
  saveBook: function (studentData) {
    return axios.post("/api/students", studentData);
  },
  // Gets all Users
  getUsers: function () {
    return axios.get("/api/users");
  },
  // Gets the User with the given id
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
  getUserByGoogleId: function (id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the User with the given id
  deleteUser: function (id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a User to the database
  saveUser: function (userData) {
    return axios.post("/api/users", userData);
  }
};