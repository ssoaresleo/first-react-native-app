import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  boxTop: {
    width: "100%",
    height: Dimensions.get("window").height / 3,
    alignItems: "center",
    justifyContent: "center",
  },
  boxMid: {
    width: "100%",
    height: Dimensions.get("window").height / 4,

    paddingHorizontal: 37,
  },
  boxBottom: {
    width: "100%",
    height: Dimensions.get("window").height / 3,
    alignContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
  },
  text: {
    fontWeight: "bold",
    marginTop: 40,
    fontSize: 18,
  },
  titleInput: {
    marginLeft: 5,
    marginTop: 20,
    color: themes.colors.gray,
    textTransform: "uppercase",
  },
  boxInput: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    borderRadius: 40,
    paddingHorizontal: 5,
    borderColor: themes.colors.lightGray,
  },
  input: {
    height: "100%",
    width: "90%",
    borderRadius: 40,
  },
  buttom: {
    width: 200,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: themes.colors.primary,
    borderRadius: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  textButton: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  textBottom: {
    fontSize: 16,
    color: themes.colors.gray,
  },
});
