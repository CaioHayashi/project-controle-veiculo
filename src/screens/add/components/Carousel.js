import {
	FlatList,
	View
} from "react-native";
import { Card } from "./Card";

export function Carousel({ categories, setCategorySelected }) {
	return (
		<View>
			<FlatList
				data={categories}
				horizontal
				keyExtractor={(_, index) => String(index)}
				showsHorizontalScrollIndicator={false}
				renderItem={({ item, index }) => (
					<View key={index}>
						<Card
							item={item}
							index={index}
							setCategorySelected={setCategorySelected}
						/>
					</View>
				)}
			></FlatList>
		</View>
	);
}

