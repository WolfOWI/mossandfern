// import axios from "axios";

// const API_URL = "http://localhost:5001/plants";

// Get array of all plants
export function getAllPlants() {
  return fetch("http://localhost:5001/plants")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      throw err;
    });
}

// Get plant by ID
export function getPlantById(plantId) {
  return fetch(`http://localhost:5001/plants/${plantId}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Failed to fetch specific plant.");
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
