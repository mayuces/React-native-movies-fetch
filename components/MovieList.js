import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, navigation }) => {
  return (
    <FlatList
      data={movies}
      renderItem={({ item }) => (
        <MovieCard key={item.imdbId} movie={item} navigation={navigation} />
      )}
      keyExtractor={(item) => item.imdbId}
      horizontal
    />
  );
};

export default MovieList;

const styles = StyleSheet.create({});
