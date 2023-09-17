import instance from "../../services/api";

// Fetch Absen Categories
export const fetchAbsenCategories = async () => {
  try {
    const response = await instance.post("/IndexAbsen", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")} `,
      },
    });
    console.log(JSON.stringify(response.data));
    return response.data.categories;
  } catch (error) {
    console.error("Error fetching Absen categories:", error);
    throw error;
  }
};

// Add Absen Category
export const addAbsenCategory = async (name) => {
  try {
    const response = await instance.post(
      "/CreateAbsen",
      { name },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")} `,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding Absen category:", error);
    throw error;
  }
};

// Edit Absen Category
export const editAbsenCategory = async (categoryId, newName) => {
  try {
    const response = await instance.put(
      `/Updatecategori/${categoryId}`,
      { name: newName },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")} `,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error editing Absen category:", error);
    throw error;
  }
};

// Delete Absen Category
export const deleteAbsenCategory = async (categoryId) => {
  try {
    const response = await instance.delete(`/Deletekategori/${categoryId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")} `,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting Absen category:", error);
    throw error;
  }
};
