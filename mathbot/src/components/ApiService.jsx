import axios from "axios";
import { notification } from "antd";

const baseUrl = "https://raperbot.my.id/api";
// const baseUrl = "http://localhost:3100";
// const prodUrl = "https://raperbot.my.id/api";

// Helper function to convert data into the required format
const convertDataForAPI = (userData, score, responses) => {
    const convertedData = {
        nama: userData.name,
        kelas: userData.school,
        score: score,
    };

    // Adding each response to the converted data
    responses.forEach((response, index) => {
        convertedData[`soal${index + 1}`] = response.answer;
    });

    return convertedData;
};

// Function to submit score
export const submitScore = async (userData, score, responses) => {
    // Convert the data into the required format
    const submissionData = convertDataForAPI(userData, score, responses);

    console.log(submissionData); // To check the converted data before submission

    try {
        // Send the POST request with the formatted data
        await axios.post(`${baseUrl}/answers`, submissionData);

        // Show success notification
        notification.success({
            message: "Success!",
            description: "Jawaban berhasil disimpan!",
            placement: "topRight", // Position of the notification
        });
    } catch (error) {
        console.error("Error submitting data:", error);

        // Show error notification
        notification.error({
            message: "Error!",
            description: "Terjadi kesalahan saat mengirim data!",
            placement: "topRight", // Position of the notification
        });
    }
};

// Function to fetch data for admin
export const fetchData = async () => {
    try {
        const response = await axios.get(`${baseUrl}/answers`);
        return response.data.data; // Return the data for further processing
    } catch (error) {
        console.error("Error fetching data:", error);
        notification.error({
            message: "Error!",
            description: "Terjadi kesalahan saat mengambil data!",
            placement: "topRight",
        });
        return []; // Return an empty array in case of error
    }
};

// Function to delete data for admin
export const deleteData = async (id) => {
    try {
        await axios.delete(`${baseUrl}/answers?id=${id}`);
        // Show success notification
        notification.success({
            message: "Success!",
            description: "Data berhasil dihapus!",
            placement: "topRight",
        });
    } catch (error) {
        console.error("Error deleting data:", error);
        // Show error notification
        notification.error({
            message: "Error!",
            description: "Terjadi kesalahan saat menghapus data!",
            placement: "topRight",
        });
    }
};

