import React, { useCallback } from "react";
import { View, StatusBar, Linking, Alert, ImageBackground } from 'react-native';

import ImgFundo from '../../assets/imgFundo.png';
import { styles } from "./styles";
import { ButtonIcon } from "../../components/Buttonicon";

export function SignIn() {
  const eaducURL = "https://moodle.youeduc.com.br/moodle/login/index.php";
  const handlePress = useCallback(async () => {

    const supported = await Linking.canOpenURL(eaducURL);

    if (supported) {
      await Linking.openURL(eaducURL);
    } else {
      Alert.alert(`Não foi possivel acessar: ${eaducURL}`);
    }
  }, [eaducURL]);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imgFundo}
        source={ImgFundo}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <View style={styles.content}>
          <ButtonIcon title="Acessar Plataforma"
            activeOpacity={0.3}
            onPress={handlePress}
          />
        </View>
      </ImageBackground>
    </View>
  )
}