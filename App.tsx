import {
  ListRenderItemInfo,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import Animated, { Layout, Transition } from "react-native-reanimated";
import { getData, ListItemType } from "./src/getData";
import { ListItem } from "./src/ListItem";

export default function App() {
  const data = getData();

  const renderItem = ({ item }: ListRenderItemInfo<ListItemType>) => {
    return <ListItem item={item} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <Animated.FlatList
        itemLayoutAnimation={Layout.springify()}
        data={data}
        keyExtractor={(item, index) => `${item.title}${index}`}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
