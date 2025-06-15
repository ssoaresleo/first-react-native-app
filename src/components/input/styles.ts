import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const styles = StyleSheet.create({
  boxInput: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderRadius: 40,
    borderColor: themes.colors.lightGray,
    backgroundColor: themes.colors.bgScreen,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: {
    height: "100%",
    width: "100%",
    borderRadius: 40,
  },
  titleInput: {
    marginLeft: 5,
    color: themes.colors.gray,
    marginTop: 20,
    textTransform: "uppercase",
  },
  button: {
    width: "10%",
  },
  icon: {
    width: "100%",
  },
});
