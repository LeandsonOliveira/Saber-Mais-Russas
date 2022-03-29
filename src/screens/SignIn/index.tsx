import React, { useCallback } from "react";
import { View, Image, StatusBar, Linking, Alert, ImageBackground } from 'react-native';

import ImgFundo from '../../assets/imgFundo.png';
import LogoHorizonte from '../../assets/logoHorizonte.png';
import LogoCidEduc from '../../assets/logoCidEduc.png';
import IllustrationImg from '../../assets/illustration.png';
import Menina from '../../assets/menina.png';
import Menino from '../../assets/menino.png';
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
        <View style={styles.logos} >
          <Image
            style={styles.logoHorizonte}
            source={LogoHorizonte}
            resizeMode="stretch"
          />
          <Image
            style={styles.logoCidEduc}
            source={LogoCidEduc}
            resizeMode="stretch"
          />
        </View>
        <View style={styles.illustrationClic}>
          <View>
            <Image
              style={styles.clic}
              source={IllustrationImg}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.meninaMenino}>
            <Image
              style={styles.menina}
              source={Menina}
              resizeMode="stretch"
            />
            <Image
              style={styles.menino}
              source={Menino}
              resizeMode="stretch"
            />
          </View>
        </View>
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