import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const baseURL = 'http://localhost:8000'; // Replace with your backend URL

export const refreshAccessToken = async () => {
    try {
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await axios.post(`${baseURL}/auth/refresh/`, { refresh: refreshToken });
        const { access } = response.data;

        // Update tokens
        localStorage.setItem("accessToken", access);
        Cookies.set("accessToken", access, { expires: 7 });

        return access;
    } catch (error) {
        console.error("Token refresh error", error);
        toast.error("Session expired. Please log in again.");
        return null;
    }
};
