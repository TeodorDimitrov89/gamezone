import { View, StyleSheet } from "react-native";

const Card = ({ children }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{children}</View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#ffffff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333333",
    shadowRadius: 2,
    shadowOpacity: 0.3,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    // padding: 14,
    marginHorizontal: 18,
    marginVertical: 10,
  },
});
