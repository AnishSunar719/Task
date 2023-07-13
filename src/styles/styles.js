import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
	androidSafeView: {
		backgroundColor: "white",
		paddingTop: Platform.OS === "android" ? 25 : 0,
		flex: 1,
		justifyContent: "center",
	},
	boldText: {
		fontSize: 36,
		fontWeight: "bold",
		marginBottom: 6,
	},
	lightText: {
		opacity: 0.6,
	},
	field: {
		flexDirection: "row",
		gap: 4,
		alignItems: "center",
		elevation: 3,
		padding: 16,
		borderRadius: 1,
	},
	button: {
		paddingVertical: 10,
		borderRadius: 25,
		flexDirection: "row",
		alignItems: "center",
	},
	textInput: {
		paddingVertical: 0,
		flex: 1,
		fontWeight: "bold",
		fontSize: 16,
	},
	footContainer: {
		flexDirection: "row",
		alignItems: "flex-end",
		justifyContent: "center",
		marginBottom: 55,
	},
	flatList: {
		justifyContent: "center",
	},
});

export default styles;
