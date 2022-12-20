import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
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
    <View>
      <View>
        <FindMovie onAdd={addMovie} />
      </View>
      <Button onPress={() => navigation.navigate("Movie")} title="Movie" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
