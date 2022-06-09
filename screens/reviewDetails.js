import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";

const ReviewDetails = ({ route }) => {
  const { title, body, rating } = route.params;
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{title}</Text>
      <Text style={globalStyles.paragraph}>{body}</Text>
      <Text style={globalStyles.paragraph}>{rating}</Text>
    </View>
  );
};

export default ReviewDetails;

const styles = StyleSheet.create({});
