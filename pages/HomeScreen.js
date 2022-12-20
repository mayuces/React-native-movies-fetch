import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
import { Image, Input, Button } from "@rneui/base";
import FindMovie from "../components/FindMovie";
import MovieList from "../components/MovieList";

const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);

  const addMovie = (newMovie) => {
    if (movies.find((movie) => movie.imdbId === newMovie.imdbId)) {
      return;
    }

    const newMovieList = [...movies];

    setMovies([...newMovieList, newMovie]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View>
        <FindMovie onAdd={addMovie} />
        <MovieList movies={movies} navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
