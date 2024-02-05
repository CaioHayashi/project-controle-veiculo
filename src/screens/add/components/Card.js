import {
	ImageBackground,
	Modal,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View
} from "react-native";

export function Card({ item, index, setCategorySelected }) {
	const handleCategory = () => {

		setCategorySelected(index)
	};

	return (
		<TouchableWithoutFeedback onPress={handleCategory} >
			<ImageBackground source={item.img} style={styles.container}>
				<Text style={styles.title}>{item.title}</Text>
			</ImageBackground>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 240,
		height: 300,
		padding: 20,
		borderRadius: 14,
		marginRight: 20,
		overflow: "hidden",
		
	},
	title: {
		color: "white",
		fontSize: 24,
		fontWeight: "bold",
		width: 200
	}
});
