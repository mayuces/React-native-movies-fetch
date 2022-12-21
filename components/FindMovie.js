import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  ActivityIndicator,
} from "react-native";
import { getMovie } from "../api";
import FontAwesome5 from "react-native-vector-icons/FontAwesome";
import { Input, Button, Text } from "@rneui/base";
import MovieCard from "./MovieCard";
import { StatusBar } from "expo-status-bar";

const FindMovie = ({ onAdd }) => {
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleQuery = (text) => {
    setQuery(text);
    setError("");
  };

  const onAddMovie = (newMovie) => {
    onAdd(newMovie);
    setQuery("");
    setMovie(null);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const data = await getMovie(query);
      setIsLoading(false);

      const loadedMovie = {
        title: data.Title,
        description: data.Plot,
        imgUrl:
          data.Poster === "N/A"
            ? "https://via.placeholder.com/360x270.png?text=no%20preview"
            : data.Poster,
        imdbId: data.imdbID,
        imdbUrl: `https://www.imdb.com/title/${data.imdbID}`,
        language: data.Language,
        metaScore: data.Metascore,
        rated: data.Rated,
        released: data.Released,
        writer: data.Writer,
        actors: data.Actors,
        type: data.Type,
        genres: data.Genre,
      };

      setMovie(loadedMovie);
    } catch (error) {
      setError(data.Error);
    }
  };

  return (
    <SafeAreaView>
      <StatusBar style="light" />
      <Input
        onChangeText={(text) => handleQuery(text)}
        value={query}
        placeholder="Search Here"
        onSubmitEditing={handleSubmit}
        leftIcon={
          <FontAwesome5
            name="search"
            type="antdesign"
            size={24}
            color="black"
          />
        }
      />
      <Button onPress={handleSubmit} title="Search" color="#25D366" />
      {isLoading ? (
        <View>
          <ActivityIndicator size="large" color="#25D366" />
        </View>
      ) : null}
      {error ? (
        <View>
          <Text>Couldnt find a movie with such a title</Text>
        </View>
      ) : null}

      {movie ? (
        <View>
          <Text h2>Preview</Text>
          <MovieCard movie={movie} />
          <Button
            title="Add to List"
            color="#25D366"
            style={{ marginTop: 10 }}
            type="outline"
            onPress={() => onAddMovie(movie)}
            titleStyle={{ color: "#25D366" }}
            buttonStyle={{ borderColor: "#25D366" }}
          >
            Add to the list
          </Button>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default FindMovie;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "white",
    padding: 30,
    height: "100%",
  },
});
