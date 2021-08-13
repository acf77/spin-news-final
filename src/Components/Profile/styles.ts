import { StyleSheet } from "react-native";
import { fonts } from "../../global/styles/fonts";

export const styles = StyleSheet.create({
  pic: {
    height: 80,
    width: 80,
    borderRadius: 50,
    marginLeft: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent: 'center'
  },
  user: {
    fontFamily: fonts.title,
    fontSize: 24,
  },
  edit: {
    fontFamily: fonts.subtitle,
    fontSize: 16,
  },
  textContainer: {
    padding: 12,
  },
  icon: {
    color: "#112233",
    padding: 15,
    marginLeft: 60,
  },
});
