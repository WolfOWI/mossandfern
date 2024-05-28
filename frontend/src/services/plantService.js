import axios from "axios";

// URL FOR API CALLS
const baseUrl = "http://localhost:5001/plants";

// GET METHODS
// ------------------------------------------------------
// Get array of all plants
export const getAllPlants = async () => {
  try {
    const response = await axios.get(`${baseUrl}`);
    return response.data;
  } catch (error) {
    console.error("Error getting all plants", error);
    throw error;
  }
};

// Get plant by ID
export const getPlantById = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error getting plant by ID", error);
    throw error;
  }
};
// ------------------------------------------------------

// UPDATE METHODS
// ------------------------------------------------------
export const updatePlant = async (id, updatedPlant) => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, updatedPlant);
    return response.data;
  } catch (error) {
    console.error("Error updating plant", error);
    throw error;
  }
};
// ------------------------------------------------------

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
