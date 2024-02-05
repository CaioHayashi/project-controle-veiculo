import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import Add from "../screens/add";
import Services from "../screens/services";
import { MaterialIcons } from "@expo/vector-icons";

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
	return (
		<Navigator
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarActiveTintColor: "#313131",
				tabBarHideOnKeyboard: true
			}}
		>
			<Screen
				name="home"
				component={Home}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialIcons name="home" size={size} color={color} />
					)
					
				}}
			/>
			<Screen
				name="add"
				component={Add}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialIcons name="add" size={size} color={color} />
					)
				}}
			/>
			<Screen
				name="services"
				component={Services}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialIcons name="list" size={size} color={color} />
					)
				}}
			/>
		</Navigator>
	);
}
