import axios from "axios";
const url = process.env.BACKEND_URL;

// * Get Methods
export const getAllUsersData = async (request) => {
  const response = await axios.get(`${url/request}`);
  return response.data;
};
export const getAllPostsData = async (request) => {
  const response = await axios.get(`${url/request}`);
  return response.data;
};
export const getOnlyUserData = async (request, id) => {
  const response = await axios.get(`${url/request/id}`);
  return response.data;
};
export const getOnlyByUserPostData = async (request, id) => {
  const response = await axios.get(`${url/request/id}`);
  return response.data;
};

// * Post Methods
export const postUsersData = async (request, newData) => {
  const response = await axios.post(`${url/request}`,newData);
  return response.data;
};
export const postByUsersPostsData = async (request, newData) => {
  const response = await axios.post(`${url/request}`,newData);
  return response.data;
};

// * Put Methods
export const putUserData = async (request, id, newData) => {
  const response = await axios.put(`${url/request/id}`,newData);
  return response.data;
};
export const putByUserPostData = async (request, id, newData) => {
  const response = await axios.put(`${url/request/id}`,newData);
  return response.data;
};

// ! Delete Methods
export const deleteUserData = async (request, id) => {
  const response = await axios.delete(`${url/request/id}`);
  return response.data;
};
export const deletePostData = async (request, id) => {
  const response = await axios.delete(`${url/request/id}`);
  return response.data;
};
