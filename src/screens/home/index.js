import { Image, StyleSheet, Text, View } from "react-native";

export default function Home() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>
				A solução completa para simplificar e organizar a gestão dos serviços
				feitos no seu veículo
			</Text>
			<Text style={styles.subtitle}>
				Desenvolvido para proporcionar uma experiência intuitiva e eficiente,
				este aplicativo coloca o controle total nas suas mãos, ajudando a manter
				seu carro em excelente estado de funcionamento.
			</Text>
			<Image style={{height: 80, margin: 40}} source={require('../../assets/crystal-light.png')} resizeMode="contain" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, justifyContent: "center", alignItems: "center", marginHorizontal: 50, rowGap: 34},
	title: { fontSize: 24, fontWeight: "bold", color: "#303030" },
	subtitle: {
		color: '#868686'
	}
});
