import React from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { style } from "./styles";

import Logo from "../../assets/logo.png";

import { themes } from "../../global/themes";
import { Input } from "../../components/input";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassoword] = React.useState("");
  const [showPassword,setShowPassword] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);

  const getLogin = () => {
    try {
      setIsLoading(true);
      if (!email || !password) {
        return Alert.alert("Atenção!", "Informe os campos obrigatórios!");
      }
      setTimeout(() => {
        Alert.alert("Sucesso!", "Usuário logado com sucesso!");
        setIsLoading(false);
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image source={Logo} style={style.logo} resizeMode="contain" />
        <Text style={style.text}>Bem vindo de volta!</Text>
      </View>
      <View style={style.boxMid}>
        <Input
          title="endereço de e-mail"
          value={email}
          IconRigth={MaterialIcons}
          iconRightName="email"
          onChangeText={setEmail}
        />
        <Input
          title="sua senha"
          value={password}
          IconRigth={Octicons}
          iconRightName="eye-closed"
          onChangeText={setPassoword}
          secureTextEntry={showPassword}
        />
        {/* <Text style={style.titleInput}>Endereço de e-mail</Text>
        <View style={style.boxInput}>
          <TextInput
            style={style.input}
            value={email}
            onChangeText={setEmail}
          />
          <MaterialIcons name="email" size={20} color={themes.colors.gray} />
        </View>

        <Text style={style.titleInput}>Senha</Text>
        <View style={style.boxInput}>
          <TextInput
            style={style.input}
            value={password}
            onChangeText={setPassoword}
          />
          <MaterialIcons
            name="remove-red-eye"
            size={20}
            color={themes.colors.gray}
          />
        </View> */}
      </View>
      <View style={style.boxBottom}>
        <TouchableOpacity style={style.buttom} onPress={getLogin}>
          {isLoading ? (
            <ActivityIndicator color="white" size={"small"} />
          ) : (
            <Text style={style.textButton}>Entrar</Text>
          )}
        </TouchableOpacity>
      </View>
      <Text style={style.textBottom}>
        Não tem uma conta?
        <Text style={{ color: themes.colors.primary }}> Crie agora!</Text>
      </Text>
    </View>
  );
}
