import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import { Image, Input, Button } from "@rneui/base";
import FindMovie from "../components/FindMovie";

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
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style="light" />
      <View>
        <FindMovie onAdd={addMovie} />
        {/* <Button onPress={() => navigation.navigate("Movie")} title="Movie" /> */}
      </View>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
