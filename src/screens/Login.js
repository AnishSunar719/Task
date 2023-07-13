import {
	SafeAreaView,
	View,
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	ImageBackground,
	Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import styles from "../styles/styles";
import { login } from "../api/api";
import GradientButton from "../components/GradientButton";

function Login({ navigation }) {
	const initialState = { username: "", password: "" };
	const [formData, setFormData] = useState(initialState);

	const handleChange = (name, value) => {
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handlePress = async () => {
		try {
			const statusCode = await login(formData);
			setFormData(initialState);
			if (statusCode === 200) {
				navigation.navigate("User");
			} else {
				navigation.navigate("PNF404");
			}
		} catch (error) {
			Alert.alert(error);
			setFormData(initialState);
		}
	};

	return (
		<SafeAreaView style={styles.androidSafeView}>
			<ImageBackground
				source={require("../../assets/bg.png")}
				resizeMode="stretch"
				style={{ flex: 1, paddingHorizontal: 25, justifyContent: "center" }}
			>
				<KeyboardAvoidingView
					behavior="height"
					style={{
						justifyContent: "center",
						flex: 1,
					}}
				>
					<View style={{ marginBottom: 55 }}>
						<Text style={styles.boldText}>Login</Text>
						<Text style={styles.lightText}>Please sign in to continue</Text>
					</View>
					<View
						style={[
							styles.field,
							{
								marginBottom: 36,
							},
						]}
					>
						<MaterialCommunityIcons name="email-outline" size={28} />
						<TextInput
							placeholder="EMAIL"
							keyboardType="email-address"
							onChangeText={(value) => handleChange("username", value)}
							value={formData.email}
							style={styles.textInput}
						/>
					</View>
					<View
						style={[
							styles.field,
							{
								marginBottom: 35,
							},
						]}
					>
						<MaterialCommunityIcons name="lock-outline" size={28} />
						<TextInput
							placeholder="PASSWORD"
							secureTextEntry={true}
							onChangeText={(value) => handleChange("password", value)}
							value={formData.password}
							style={styles.textInput}
						/>
						<TouchableOpacity>
							<Text style={{ color: "#f8be6c", fontWeight: "bold" }}>
								FORGOT
							</Text>
						</TouchableOpacity>
					</View>
					<View style={{ alignItems: "flex-end", marginBottom: 35 }}>
						<TouchableOpacity onPress={handlePress} style={styles.button}>
							<GradientButton>
								<View
									style={{
										flexDirection: "row",
										paddingHorizontal: 10,
										gap: 4,
									}}
								>
									<Text
										style={{
											color: "white",
											fontSize: 18,
											fontWeight: "bold",
										}}
									>
										LOGIN
									</Text>
									<MaterialCommunityIcons
										name="arrow-right"
										size={24}
										color={"white"}
									/>
								</View>
							</GradientButton>
						</TouchableOpacity>
					</View>
				</KeyboardAvoidingView>

				<View style={styles.footContainer}>
					<Text style={styles.lightText}>Don't have an account?</Text>
					<TouchableOpacity onPress={() => navigation.navigate("Register")}>
						<Text
							style={{
								color: "#f7a13c",
								marginLeft: 5,
								fontWeight: "bold",
							}}
						>
							Sign up
						</Text>
					</TouchableOpacity>
				</View>
				<StatusBar style="auto" />
			</ImageBackground>
		</SafeAreaView>
	);
}

export default Login;
