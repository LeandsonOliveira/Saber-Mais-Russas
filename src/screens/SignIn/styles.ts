import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //backgroundColor : theme.colors.background
  },
  imgFundo:{
    flex: 1,
  },
  logos:{
    flex: 1,
    flexDirection: "row",
    marginTop: 50,
    justifyContent: 'center'
  },
  logoRussas:{
    width: 160,
    height: 80
  },
  illustrationClic:{
    flex: 3,
    justifyContent: 'center',
  },
  saber: {    
    alignSelf: 'center',
    width: 250,
    height: 150,

  },
  meninaMenino:{
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-around',
    marginTop: 50,
  },
  menina:{
    width: 120,
    height: 200
  },
  menino:{
    width: 150,
    height: 200
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  title: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 16,
  },
});