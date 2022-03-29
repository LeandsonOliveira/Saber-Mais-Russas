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
  logoHorizonte:{
    width: 160,
    height: 80
  },
  logoCidEduc:{
    width: 160,
    height: 60,
    marginLeft: 10
  },
  illustrationClic:{
    flex: 3,
    justifyContent: 'center',
  },
  clic: {    
    alignSelf: 'center',
    width: 320,
    height: 190,
  },
  meninaMenino:{
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-around',
  },
  menina:{
    width: 130,
    height: 200
  },
  menino:{
    width: 110,
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