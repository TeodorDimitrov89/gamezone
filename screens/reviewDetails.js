import { View, Text, StyleSheet, Image } from "react-native";
import { images } from "../styles/global";
import Card from "../shared/Card";
import { globalStyles } from "../styles/global";

const ReviewDetails = ({ route }) => {
  const { title, body, rating } = route.params;
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{title}</Text>
        <Text style={globalStyles.paragraph}>{body}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image style={styles.ratingImage} source={images[rating]} />
        </View>
      </Card>
    </View>
  );
};

export default ReviewDetails;

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#eeeeee",
  },
  ratingImage: {
    marginLeft: "auto",
  },
});
