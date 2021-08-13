import React, { useContext } from "react";

import { useNavigation } from "@react-navigation/core";

import { SafeAreaView, Text, View } from "react-native";
import { Input } from "../../Components/Input";
import { styles } from "./styles";
import { Profile } from "../../Components/Profile";
import { Button } from "../../Components/Button";

import { Context } from "../../context/Context";
import { useState } from "react";

export function AddNews() {
  const { data, title, news, author, setNews, setAuthor, setTitle } =
    useContext(Context);

  const [list, setList] = useState(data);

  let id = list.length;
  function addItem() {
    list.push({ id: ++id, tit: title, not: news, aut: author });
    setList([...list]);
  }

  const navigation = useNavigation();

  function handleNavigation() {
    if (title !== undefined || "") {
      addItem();
      navigation.goBack();
    } else {
      alert("Preencha todos os dados!");
    }
  }

  return (
    <SafeAreaView>
      <View>
        <Profile />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Crie uma nova notícia</Text>
        <Text style={styles.subtitle}>Título da notícia</Text>
        <Input title="Título da notícia" onChangeText={setTitle} />
        <Text style={styles.subtitle}>Conteúdo da notícia</Text>
        <Input title="Conteúdo da notícia" onChangeText={setNews} />
        <Text style={styles.subtitle}>Autor</Text>
        <Input title="Nome do autor" onChangeText={setAuthor} />
        <View style={styles.button}>
          <Button title="Salvar notícia" onPress={() => handleNavigation()} />
        </View>
      </View>
    </SafeAreaView>
  );
}
