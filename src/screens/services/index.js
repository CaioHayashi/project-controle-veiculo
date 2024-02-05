import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import useStorage from "../../hooks/useStorage";
import MaskInput, { createNumberMask } from "react-native-mask-input";

const dollarMask = createNumberMask({
	prefix: ["R", "$", " "],
	delimiter: ".",
	separator: ",",
	precision: 2
});

export default function Services() {
	const [services, setServices] = useState([]);
	const focused = useIsFocused();
	const { getItem } = useStorage();

	useEffect(() => {
		const loadServices = async () => {
			const response = await getItem("@services");
			setServices(response);
		};

		loadServices();
	}, [focused]);
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Services</Text>
			<FlatList
				data={services}
				renderItem={({ item, key }) => (
					<View
						key={key}
						style={[
							styles.card,
							item.category == "Alinhamento e Balanceamento"
								? { backgroundColor: "#eee" }
								: item.category == "Troca de Óleo e Filtros"
								? { backgroundColor: "#ddd" }
								: { backgroundColor: "#ccc" }
						]}
					>
						<Text style={styles.workshop}>{item.workshop}</Text>
						<View style={styles.cardContent}>
							<Text style={styles.category}>{item.category}</Text>
							<MaskInput
								style={styles.value}
								mask={dollarMask}
								value={item.value}
								editable={false}
							/>
						</View>
					</View>
				)}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, justifyContent: "center", marginTop: 40 },
	title: { fontSize: 20, margin: 20, color: "#303030", fontWeight: 'bold'},
	card: {
		backgroundColor: "#ddd",
		padding: 10,
		borderRadius: 4,
		marginBottom: 4
	},
	cardContent: {
		flexDirection: "row",
		justifyContent: "space-between"
	},
	workshop: {
		fontSize: 18,
		marginBottom: 8,
		color: "#303030"
	},
	category: {
		color: "#868686",
		fontStyle: "italic"
	},
	value: {
		color: "#303030"
	}
});

//"#868686";
