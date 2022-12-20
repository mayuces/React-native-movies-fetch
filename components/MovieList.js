import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <View>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </View>
  );
};

export default MovieList;

const styles = StyleSheet.create({});
