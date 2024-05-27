import axios from "axios";

const API_URL = "http://localhost:5000/api/plants";

export const getPlants = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createPlant = async (plantData) => {
  const response = await axios.post(API_URL, plantData);
  return response.data;
};

export const updatePlant = async (id, plantData) => {
  const response = await axios.put(`${API_URL}/${id}`, plantData);
  return response.data;
};

export const deletePlant = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
