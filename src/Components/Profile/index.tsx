import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

import pic from "../../assets/profile.png";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  action: object;
}

export function Profile({action, ...rest}: Props) {
  return (
    <SafeAreaView style={styles.container} >
      <Image source={pic} style={styles.pic} />
      <View style={styles.textContainer}>
        <Text style={styles.user}>Olá, Antonio!</Text>
        <Text style={styles.edit}>editar perfil</Text>
      </View>
      <View>
        <TouchableOpacity onPress={action} {...rest} >
          <Icon name="add-circle" size={54} style={styles.icon}  />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
