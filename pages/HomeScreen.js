import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image, Input, Button } from "@rneui/base";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button onPress={() => navigation.navigate("Movie")} title="Movie" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
