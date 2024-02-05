import AsyncStorage from '@react-native-async-storage/async-storage'

const useStorage = () => {
    const getItem = async (key) => {
		try {
			const services = await AsyncStorage.getItem(key);

			return JSON.parse(services) || [];
		} catch (error) {
			console.log("Erro ao buscar", error);
			return [];
		}
    }
    const saveItem = async (key, value) => {
        try {
            let services = await getItem(key)
            services.push(value)

            await AsyncStorage.setItem(key, JSON.stringify(services))
            console.log(services)
        } catch (error) {
            console.log("erro ao salvar", error)
        }
    }
    const removeItem = async () => {
        try {
            
        } catch (error) {
            console.log(error)
        }
    }

    return {
        getItem, saveItem, removeItem
    }
}

export default useStorage;