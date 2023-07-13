import {
	SafeAreaView,
	View,
	Text,
	TextInput,
	TouchableOpacity,
	ImageBackground,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "../styles/styles";
import { useState } from "react";
import GradientButton from "../components/GradientButton";

function Register({ navigation }) {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password1, setPassword1] = useState("");
	const [password2, setPassword2] = useState("");
	return (
		<SafeAreaView style={styles.androidSafeView}>
			<KeyboardAwareScrollView
				showsVerticalScrollIndicator={false}
				style={{ flex: 1 }}
			>
				<ImageBackground
					source={require("../../assets/bg.png")}
					resizeMode="stretch"
					style={{ flex: 1, paddingHorizontal: 25, justifyContent: "center" }}
				>
					<View style={{ justifyContent: "center", flex: 1 }}>
						<TouchableOpacity
							onPress={() => navigation.goBack()}
							style={{ marginVertical: 55 }}
						>
							<MaterialCommunityIcons name="arrow-left" size={28} />
						</TouchableOpacity>
						<View style={{ marginBottom: 55 }}>
							<Text style={styles.boldText}>Create Account</Text>
						</View>
						<View
							style={[
								styles.field,
								{
									marginBottom: 36,
								},
							]}
						>
							<MaterialCommunityIcons name="account-outline" size={28} />
							<TextInput
								placeholder="FULL NAME"
								onChangeText={(newText) => setFullName(newText)}
								defaultValue={fullName}
								style={styles.textInput}
							/>
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
								onChangeText={(newText) => setEmail(newText)}
								defaultValue={email}
								keyboardType="email-address"
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
								onChangeText={(password) => setPassword1(password)}
								defaultValue={password1}
								secureTextEntry={true}
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
								placeholder="CONFIRM PASSWORD"
								onChangeText={(password) => setPassword2(password)}
								defaultValue={password2}
								secureTextEntry={true}
								style={styles.textInput}
							/>
						</View>
						<View style={{ alignItems: "flex-end", marginBottom: 35 }}>
							<TouchableOpacity style={styles.button}>
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
											SIGN UP
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
					</View>
					<View style={styles.footContainer}>
						<Text style={styles.lightText}>Already have an account?</Text>
						<TouchableOpacity onPress={() => navigation.navigate("Login")}>
							<Text
								style={{
									color: "#f7a13c",
									marginLeft: 5,
									fontWeight: "bold",
								}}
							>
								Sign in
							</Text>
						</TouchableOpacity>
					</View>
				</ImageBackground>
			</KeyboardAwareScrollView>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

export default Register;
