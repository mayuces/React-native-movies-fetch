import { Linking, StyleSheet, TouchableOpacity, View } from "react-native";
import { Image, Button, Text } from "@rneui/base";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";

const MovieCard = ({
  movie,
  navigation,
  deleteMovie,
  onRecentlyViewed,
  context = "showList",
}) => {
  const handleCardLink = () => {
    nav.navigate("Movie", movie);
  };

  const nav = useNavigation();

  const shouldRenderDeleteButton = context !== "preview";

  const handlePress = () => {
    if (context === "showList") {
      handleCardLink();
      onRecentlyViewed(movie);
    }
  };

  return (
    <TouchableOpacity style={styles.item} onPress={handlePress}>
      <Image
        style={styles.poster}
        source={{
          uri: `${movie.imgUrl}`,
        }}
      />
      <View style={styles.cardBottom}>
        <Text
          style={{
            width: 171,
            fontSize: 13,
          }}
        >
          {movie.title}
        </Text>
        {shouldRenderDeleteButton && (
          <AntDesign
            name="delete"
            type="antdesign"
            size={24}
            color="black"
            onPress={() => deleteMovie(movie.imdbId, movie.type)}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  item: {
    flexDirection: "column",
    flexWrap: "wrap",
    marginRight: 10,
    marginTop: 10,
  },
  poster: {
    width: 171,
    height: 255.5,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  cardBottom: {
    flexDirection: "row",
  },
});
