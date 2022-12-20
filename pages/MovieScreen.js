import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image, Button } from "@rneui/base";

const MovieScreen = ({ navigation, route }) => {
  const { params } = route;

  return (
    <View style={styles.container}>
      <View style={styles.imageStyler}>
        <Text style={styles.titleText}>{params.title}</Text>
        <Image
          style={styles.imageContainer}
          source={{ uri: `${params.imgUrl}` }}
        />
      </View>
      <View>
        <View>
          <Text>{params.description}</Text>
          <Text
            style={{ color: "blue" }}
            onPress={() => Linking.openURL(params.imdbUrl)}
          >
            IMDB
          </Text>
        </View>
        <View>
          <Text>Language: {params.language}</Text>
          <Text>MetaCritic: {params.metaScore}</Text>
          <Text>Rated: {params.rated}</Text>
          <Text>Released: {params.released}</Text>
          <Text>Writer: {params.writer}</Text>
          <Text>Actors: {params.actors}</Text>
        </View>
      </View>
    </View>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 20,
    height: 300,
  },

  imageStyler: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },

  mediaContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainer: {
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").width * 0.8,
    resizeMode: "cover",
  },
  logoContainer: {
    height: 50,
    width: 50,
  },
});
