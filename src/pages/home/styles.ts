import { StyleSheet } from "react-native";
import { fonts } from "../../global/styles/fonts";
export const styles = StyleSheet.create({
  listContainer: {
    justifyContent: "center",
    borderWidth: 1,
    borderColor: '#112233',
    borderRadius: 10,
    padding: 10,
    margin: 15
  },
  list: {
    height: 400,
    width: 300,
    alignSelf: 'center',
    padding: 10
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: fonts.title,
    fontSize: 28,
    padding: 10,
    alignSelf: "center",
  },
  input: {
    alignSelf: "center",
    justifyContent: "center",
    padding: 1,
  },
  buttonContainer: {
    padding: 15,
  },
});
