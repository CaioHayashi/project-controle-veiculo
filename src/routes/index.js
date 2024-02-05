import { NavigationContainer } from "@react-navigation/native";
import { TabRoutes } from "./TabRoutes.routes";

export function Routes() {

	return (
		<NavigationContainer>
			<TabRoutes />
		</NavigationContainer>
	);
}
