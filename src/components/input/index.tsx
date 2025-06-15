import React, { forwardRef } from "react";
import {
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { FontAwesome, MaterialIcons, Octicons } from "@expo/vector-icons";
import { themes } from "../../global/themes";

type IconComponent =
  | React.ComponentType<React.ComponentProps<typeof MaterialIcons>>
  | React.ComponentType<React.ComponentProps<typeof FontAwesome>>
  | React.ComponentType<React.ComponentProps<typeof Octicons>>;

type InputProps = TextInputProps & {
  IconLeft?: IconComponent;
  IconRigth?: IconComponent;
  iconLeftName?: string;
  iconRightName?: string;
  title?: string;
  onIconLeftPress?: () => void;
  onIconRigthPress?: () => void;
  height?: number;
  labelStyle?: StyleProp<TextStyle>;
};

export const Input = forwardRef<TextInput, InputProps>((inputProps, ref) => {
  const {
    IconLeft,
    IconRigth,
    iconLeftName,
    iconRightName,
    title,
    onIconLeftPress,
    onIconRigthPress,
    height,
    labelStyle,
    ...rest
  } = inputProps;
  const calculateSizeWidth = () => {
    if (IconLeft && IconRigth) {
      return "80%";
    } else if (IconLeft || IconRigth) {
      return "90%";
    } else {
      return "100%";
    }
  };

  const calculateSizePaddingLeft = () => {
    if (IconLeft && IconRigth) {
      return 0;
    } else if (IconLeft || IconRigth) {
      return 10;
    } else {
      return 20;
    }
  };

  return (
    <React.Fragment>
      {title && <Text style={[styles.titleInput, labelStyle]}>{title}</Text>}
      <View
        style={[
          styles.boxInput,
          {
            paddingLeft: calculateSizePaddingLeft(),
            height: height ? height : 50,
            padding: 5,
          },
        ]}
      >
        {IconLeft && iconLeftName && (
          <TouchableOpacity onPress={onIconLeftPress} style={styles.button}>
            <IconLeft
              name={iconLeftName as any}
              size={20}
              color={themes.colors.gray}
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
        <TextInput
          style={[
            styles.input,
            { width: calculateSizeWidth(), height: "100%" },
          ]}
          ref={ref}
          multiline
          {...rest}
        />
        {IconRigth && iconRightName && (
          <TouchableOpacity onPress={onIconRigthPress} style={styles.button}>
            <IconRigth
              name={iconRightName as any}
              size={20}
              color={themes.colors.gray}
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
      </View>
    </React.Fragment>
  );
});
