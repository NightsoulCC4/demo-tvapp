import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const LandingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Demo TV-Application</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.heading}>Lessons</Text>
        <View style={styles.lesson}>
          <Text style={styles.lesson}>Basic</Text>
          <Text style={styles.lesson}>Pro</Text>
        </View>
        <Text style={styles.heading}>Recently</Text>
        <Text style={styles.recent}>New</Text>
        <Image
          source={{ uri: "https://placeimg.com/640/480/abstract" }} // Replace with actual image URL
          style={styles.image}
        />
        <Text style={styles.description}>
          Lesson 1: Intro, Lesson 2: Virink with Al, Lesson 3: How to use color
          in your work
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.artist}>Kira Kosmacheva</Text>
        <Text style={styles.cta}>Start your art journey</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222", // Dark background for TV viewing
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 4,
    padding: 20,
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 20,
  },
  title: {
    fontSize: 48,
    color: "#fff",
  },
  heading: {
    fontSize: 32,
    color: "#fff",
    marginBottom: 10,
  },
  lesson: {
    fontSize: 24,
    color: "#fff",
    marginRight: 20,
  },
  recent: {
    fontSize: 24,
    color: "#fff",
  },
  image: {
    width: 320,
    height: 240,
    marginBottom: 10,
  },
  description: {
    fontSize: 20,
    color: "#ddd",
  },
  artist: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 10,
  },
  cta: {
    fontSize: 32,
    color: "#fff",
  },
});

export default LandingScreen;
