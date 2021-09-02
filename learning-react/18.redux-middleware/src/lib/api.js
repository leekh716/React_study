import axios from "../../node_modules/axios/index";

export const getPost = id => axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

export const getUsers = id => axios.get(`https://jsonplaceholder.typicode.com/users`);
