import axios from "axios";

export default {
  // Gets all students
  getStudents: function () {
    return axios.get("/api/student");
  },
  // Gets the student with the given id
  getStudent: function (id) {
    return axios.get("/api/student/" + id);
  },
  // Deletes the student with the given id
  deleteStudent: function (id) {
    return axios.delete("/api/student/" + id);
  },
  // Saves a student to the database
  saveBook: function (studentData) {
    return axios.post("/api/student", studentData);
  },
  // Gets all Users
  getUsers: function () {
    return axios.get("/api/user");
  },
  // Gets the User with the given id
  getUser: function (id) {
    return axios.get("/api/user/" + id);
  },
  getUserByGoogleId: function (id) {
    return axios.get("/api/user/" + id);
  },
  // Deletes the User with the given id
  deleteUser: function (id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a User to the database
  saveUser: function (userData) {
    return axios.post("/api/user", userData);
  }

};