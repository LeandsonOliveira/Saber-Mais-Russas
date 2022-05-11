import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgFundo:{
    flex: 1
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 50,
    marginBottom: 50
  },
  title: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 16,
  },
});