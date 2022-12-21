import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image, Button } from "@rneui/base";
import ChipGroup from "../components/ChipGroup";

const MovieScreen = ({ navigation, route }) => {
  const { params } = route;

  const genres = params.genres.split(", ");

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          style={styles.poster}
          resizeMode={"cover"}
          source={{ uri: `${params.imgUrl}` }}
        />
        <View style={{ flex: 1, backgroundColor: "grey", padding: 20 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexWrap: "wrap",
                flexDirection: "column",
              }}
            >
              <Text style={{ fontSize: 17, fontWeight: "700" }}>
                {params.title}
              </Text>
              <Text>{params.released}</Text>
            </View>
            <View
              style={{
                width: 48,
                height: 48,
                backgroundColor: "white",
                borderRadius: 24,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 5,
              }}
            >
              <Text>{params.metaScore}</Text>
            </View>
          </View>
          <ChipGroup datas={genres} />
          <Text style={styles.header}>Overview</Text>
          <Text>{params.description}</Text>
          <Text style={styles.header}>Directed By: {params.writer}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  poster: {
    height: 301,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },
});
