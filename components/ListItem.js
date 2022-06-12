import { Text, View, StyleSheet } from "react-native";
// import { globalStyles } from "../styles/global";

const ListItem = ({ title }) => {
  return (
    <View>
      {/* <Text style={[globalStyles.titleText, styles.itemTitle]}>{title}</Text> */}
      <Text>{title}</Text>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  item: {
    padding: 14,
    backgroundColor: "#6e6d6d",
    marginVertical: 10,
    borderRadius: 8,
  },
  itemTitle: {
    color: "#ffffff",
  },
});
