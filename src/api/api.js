import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const LOGIN_URL = "https://dummyjson.com/auth/login";
const RESOURCE_URL = "https://dummyjson.com/auth/user?limit=10";

const saveToken = async (token) => {
	try {
		await AsyncStorage.setItem("token", token);
	} catch (error) {
		Alert.alert(error);
	}
};

const login = async (loginData) => {
	try {
		const response = await axios.post(LOGIN_URL, loginData, {
			headers: { "Content-Type": "application/json" },
		});
		saveToken(response.data.token);
		return response.status;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

const fetchUserData = async () => {
	try {
		const token = await AsyncStorage.getItem("token");

		if (token) {
			const response = await axios.get(RESOURCE_URL, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			return response.data;
		}
	} catch (error) {
		Alert.alert(error);
	}
};

export { login, RESOURCE_URL, fetchUserData };

// username : kminchelle
// password : 0lelplR