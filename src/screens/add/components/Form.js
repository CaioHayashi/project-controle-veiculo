
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import useStorage from "../../../hooks/useStorage";
import MaskInput, { createNumberMask } from 'react-native-mask-input';

const dollarMask = createNumberMask({
  prefix: ['R', '$', ' '],
  delimiter: '.',
  separator: ',',
  precision: 2,
})

export function Form ({category}) {
    const [workshop, setWorkshop] = useState("");
    const [value, setValue] = useState('')

    const {saveItem} = useStorage()

    const handleForm = async () => {
        const service = {
					category: category,
					value: (value / 100).toFixed(2),
					workshop: workshop
				};
        
		await saveItem("@services", service)
		alert('Salvo com sucesso')
		setWorkshop('')
		setValue('')
    }

    return (
			<View>
				<TextInput
					style={styles.input}
					placeholder="oficina"
					value={workshop}
					onChangeText={setWorkshop}
				/>
				<MaskInput
					keyboardType="decimal-pad"
					mask={dollarMask}
					style={styles.input}
					placeholder="valor"
					value={value}
					onChangeText={(masked, unmasked) => setValue(unmasked)}
				/>
				<TouchableOpacity style={styles.button} onPress={handleForm}>
					<Text style={styles.buttonText}>Salvar</Text>
				</TouchableOpacity>
			</View>
		);
}

const styles = StyleSheet.create({
	input: {
		height: 40,
		marginBottom: 8,
		padding: 10,
		backgroundColor: "#fff",
		borderRadius: 8
	},
	button: {
		padding: 14,
		alignItems: "center",
		backgroundColor: "green"
	},
	buttonText: {
        color: 'white'
    }
});