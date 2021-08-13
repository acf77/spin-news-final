import { StyleSheet } from "react-native";
import { fonts } from "../../global/styles/fonts";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: '#112233',
    borderRadius: 10,
    width: 300,
    height: 80,
    alignSelf: 'center'
  },
  text: {
    textAlign: 'center',
    alignContent: 'center',
    padding: 26,
    color: '#ffff',
    fontWeight: 'bold',
    fontFamily: fonts.subtitle,
    fontSize: 22
  }
})