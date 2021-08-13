import { StyleSheet } from "react-native";
import { fonts } from "../../global/styles/fonts";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 80,
  },
  title: {
    fontFamily: fonts.title,
    fontSize: 25,
    textAlign: "center",
  },
  subtitle: {
    fontFamily: fonts.subtitle,
    fontSize: 20,
    textAlign: "center",
    padding: 10,
  },
  input: {
    height: 200,
  },
  button: {
    padding: 10,
  },
});
