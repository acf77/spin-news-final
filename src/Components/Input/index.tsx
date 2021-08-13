import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

type Props = TextInputProps & {
  title: string;
};

export function Input({ title, ...rest }: Props) {
  return <TextInput {...rest} placeholder={title} style={styles.input} enablesReturnKeyAutomatically={true} />;
}
