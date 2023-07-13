import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	ActivityIndicator,
	SafeAreaView,
	FlatList,
	Image,
	TouchableOpacity,
	Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchUserData } from "../api/api";
import styles from "../styles/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import GradientButton from "../components/GradientButton";

const Item = ({ firstName, lastName, image, email, gender, age }) => (
	<View style={{ alignItems: "center", gap: 3, marginBottom: 24 }}>
		<Image
			source={{ uri: image }}
			resizeMode="cover"
			style={{ width: 100, height: 100 }}
		/>
		<Text style={{ fontWeight: "bold" }}>
			{firstName} {lastName}
		</Text>
		<Text>Age: {age}</Text>
		<Text>Gender: {gender}</Text>
		<Text>Email: {email}</Text>
	</View>
);

const User = ({ navigation }) => {
	const [loading, setLoading] = useState(true);
	const [userData, setUserData] = useState(null);

	const handleLogout = async () => {
		await AsyncStorage.removeItem("token", () => navigation.navigate("Login"));
	};

	useEffect(() => {
		const getUserData = async () => {
			try {
				const data = await fetchUserData();
				setUserData(data);
				setLoading(false);
			} catch (error) {
				Alert.alert(error);
				setLoading(false);
			}
		};
		getUserData();
	}, []);
	if (loading) {
		return (
			<View style={{ flex: 1, justifyContent: "center" }}>
				<ActivityIndicator size="large" />
			</View>
		);
	}
	return (
		<SafeAreaView style={styles.androidSafeView}>
			<View
				style={{
					alignItems: "center",
					justifyContent: "center",
					paddingVertical: 50,
				}}
			>
				<View
					style={{
						marginBottom: 35,
						flexDirection: "row",
						alignItems: "center",
						gap: 55,
					}}
				>
					<Text style={{ fontSize: 26, fontWeight: "bold" }}>
						List of Users
					</Text>
					<TouchableOpacity onPress={handleLogout}>
						<GradientButton>
							<View
								style={{ flexDirection: "row", gap: 4, paddingHorizontal: 10 }}
							>
								<Text style={{ fontSize: 18, color: "white" }}>Logout</Text>
								<MaterialCommunityIcons name="logout" size={24} color="white" />
							</View>
						</GradientButton>
					</TouchableOpacity>
				</View>
				{userData ? (
					<FlatList
						data={userData.users}
						renderItem={({ item }) => <Item {...item} />}
						keyExtractor={(item) => item.id}
						contentContainerStyle={styles.flatList}
						showsHorizontalScrollIndicator={false}
						showsVerticalScrollIndicator={false}
					/>
				) : (
					<Text>Item not found</Text>
				)}
			</View>
		</SafeAreaView>
	);
};

export default User;
