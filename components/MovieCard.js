import { Linking, StyleSheet, Text, View } from "react-native";
import { Image, Input, Button } from "@rneui/base";
import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageStyler}>
        <Image
          style={styles.imageContainer}
          source={{ uri: `${movie.imgUrl}` }}
        />
      </View>
      <View>
        <View>
          <View style={styles.mediaContainer}>
            <Image
              source={{
                uri: "data:image/png;base64,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",
              }}
              style={styles.logoContainer}
            />
            <Text style={styles.titleText}>{movie.title}</Text>
          </View>
        </View>
        <View>
          <Text>{movie.description}</Text>
          <Text
            style={{ color: "blue" }}
            onPress={() => Linking.openURL(movie.imdbUrl)}
          >
            IMDB
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  imageStyler: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },

  mediaContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainer: {
    width: 200,
    height: 200,
  },
  logoContainer: {
    height: 50,
    width: 50,
  },
});
