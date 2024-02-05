import { ScrollView, StyleSheet, Text, View } from "react-native";

import { Carousel } from "./components/Carousel";
import { useState } from "react";
import { Form } from "./components/Form";

export default function Add() {
	const categories = [
		{
			title: "Alinhamento e Balanceamento",
			img: require("../../assets/alinhamentoEBalanceamento.jpg"),
			description:
				"Mantenha seu veículo estável e suave. Alinhamos suas rodas para evitar desgastes irregulares e balanceamos para uma condução perfeita."
		},
		{
			title: "Troca de Óleo e Filtros",
			img: require("../../assets/trocaOleoFiltros.jpg"),
			description:
				"Proteja o coração do seu carro. Substituímos o óleo, garantindo um motor lubrificado, eficiente e durável."
		},
		{
			title: "Diagnóstico",
			img: require("../../assets/diagnosticos.jpg"),
			description:
				"Antecipe problemas. Utilizamos tecnologia avançada para identificar e corrigir possíveis falhas, mantendo seu veículo em ótimo estado."
		}
	];

	const [categorySelected, setCategorySelected] = useState(0);

	console.log(categorySelected);
	return (
		<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
			<Carousel
				categories={categories}
				setCategorySelected={setCategorySelected}
			/>

			<View style={styles.content}>
				<Text style={styles.titleContent}>
					{categories[categorySelected].title}
				</Text>
				<Text style={styles.subtitleDetails}>
					{categories[categorySelected].description}
				</Text>
			</View>

			<Form category={categories[categorySelected].title} />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, marginTop: 40, marginHorizontal: 14},
	titleContent: { fontSize: 20, color: "#303030", fontWeight: "bold", marginBottom: 8 },
	content: {
		marginHorizontal: 20,
		marginVertical: 40
	}
});
