import { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ListItem from "../components/ListItem";
import { globalStyles } from "../styles/global";

const reviewList = [
  {
    id: "1",
    title: "Zelda, Breath of Fresh Air",
    body: "Lorem Ipsum",
    rating: 5,
  },
  {
    id: "2",
    title: "Gotta Catch Them All (again)",
    body: "Lorem Ipsum",
    rating: 4,
  },
  {
    id: "3",
    title: 'Not So "Final" Fantasy',
    body: "Lorem Ipsum",
    rating: 3,
  },
];

const Home = ({ navigation }) => {
  const [reviews, setReviews] = useState(reviewList);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("ReviewDetails", { ...item })}
      >
        <ListItem {...item} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={globalStyles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={reviews}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  listContainer: {
    marginVertical: 12,
  },
});
