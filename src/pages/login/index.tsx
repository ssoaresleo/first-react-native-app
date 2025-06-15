import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { style } from "./styles";

import Logo from "../../assets/logo.png";
import { MaterialIcons } from "@expo/vector-icons";
import { themes } from "../../global/themes";
export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassoword] = React.useState("");
  
  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image source={Logo} style={style.logo} resizeMode="contain" />
        <Text style={style.text}>Bem vindo de volta!</Text>
      </View>
      <View style={style.boxMid}>
        <Text style={style.titleInput}>Endereço de e-mail</Text>
        <View style={style.boxInput}>
          <TextInput style={style.input} />
          <MaterialIcons name="email" size={20} color={themes.colors.gray} />
        </View>

        <Text style={style.titleInput}>Senha</Text>
        <View style={style.boxInput}>
          <TextInput style={style.input} />
          <MaterialIcons
            name="remove-red-eye"
            size={20}
            color={themes.colors.gray}
          />
        </View>
      </View>
      <View style={style.boxBottom}>
        <TouchableOpacity style={style.buttom}>
          <Text style={style.textButton}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <Text style={style.textBottom}>
        Não tem uma conta?
        <Text style={{ color: themes.colors.primary }}> Crie agora!</Text>
      </Text>
    </View>
  );
}
