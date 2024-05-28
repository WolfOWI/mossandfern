import axios from "axios";

const API_URL = "http://localhost:5001/plants";

// Get array of all events
export function getAllPlants() {
  return fetch("http://localhost:5001/plants")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      throw err;
    });
}

// export const createPlant = async (plantData) => {
//   const response = await axios.post(API_URL, plantData);
//   return response.data;
// };

// export const updatePlant = async (id, plantData) => {
//   const response = await axios.put(`${API_URL}/${id}`, plantData);
//   return response.data;
// };

// export const deletePlant = async (id) => {
//   const response = await axios.delete(`${API_URL}/${id}`);
//   return response.data;
// };
