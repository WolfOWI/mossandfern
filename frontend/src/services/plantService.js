import axios from "axios";

// URL FOR API CALLS
const baseUrl = "http://localhost:5001/plants";

// READ METHODS
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

// CREATE METHODS
// ------------------------------------------------------
// Create a new plant
export const createPlant = async (plantData) => {
  try {
    const response = await axios.post(`${baseUrl}/create`, plantData);
    return response.data;
  } catch (error) {
    console.error("Error creating plant", error);
    throw error;
  }
};
// ------------------------------------------------------

// UPDATE METHODS
// ------------------------------------------------------
// Update plant (based on ID)
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

// DELETE METHODS
// ------------------------------------------------------
// Delete a plant (based on ID)
export const deletePlant = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting plant", error);
    throw error;
  }
};
// ------------------------------------------------------
