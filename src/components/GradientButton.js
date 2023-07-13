import { LinearGradient } from "expo-linear-gradient";
export default function GradientButton({ children }) {
	return (
		<LinearGradient
			colors={["#f2c759", "#f5b44a", "#f7a13c"]}
			start={{ x: 0.4, y: 0.4 }}
			end={{ x: 1, y: 1 }}
			style={{
				paddingHorizontal: 15,
				paddingVertical: 15,
				borderRadius: 25,
			}}
		>
			{children}
		</LinearGradient>
	);
}
