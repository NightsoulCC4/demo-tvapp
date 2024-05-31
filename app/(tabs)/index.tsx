import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";


const App = () => {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const [selectedOption, setSelectedOption] = React.useState<string>("Netflix");

  const handleOptionPress = (index: number, option: string): void => {
    setSelectedIndex(index);
    setSelectedOption(option);
  };

  const options: string[] = ["Netflix", "Youtube", "BiliBili"];

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to My TV App Demo!</Text>
        <Image
          source={{
            uri: "https://envato-shoebox-0.imgix.net/4e0d/021d-2021-400b-8d54-7b9df574667a/2527394.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=800&fit=max&markalign=center%2Cmiddle&markalpha=18&s=95af6c7a21b7577df8be57add95a7d21",
          }} // Replace with a TV-friendly image URL
          style={styles.image}
        />
        <Text style={styles.description}>
          This is a simple demo to showcase some basic TV app elements.
        </Text>

        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.option,
              index === selectedIndex && styles.optionSelected,
            ]}
            onPress={() => handleOptionPress(index, options[index])}
          >
            <Text
              style={[
                styles.optionText,
                index === selectedIndex && styles.optionSelected,
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}

        <Text style={styles.optionText}>
          You are on {selectedOption} application.
        </Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  title: {
    fontSize: 48,
    color: "#fff",
    marginBottom: 20,
  },
  image: {
    width: 320,
    height: 240,
  },
  description: {
    fontSize: 24,
    color: "#ddd",
    marginTop: 20,
  },
  option: {
    backgroundColor: "#444",
    textAlign: "center",
    width: "100%",
    maxWidth: 140,
    padding: 15,
    margin: 10,
  },
  optionSelected: {
    backgroundColor: "#fff",
    opacity: 0.5,
    color: "black",
  },
  optionText: {
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
  },
  optionTextSelected: {
    fontSize: 24,
    color: "#000",
    textAlign: "center",
  },
});

export default App;
