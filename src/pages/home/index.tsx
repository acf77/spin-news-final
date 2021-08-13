import React, { useContext } from "react";
import {
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/core";

import { styles } from "./styles";

import { Input } from "../../Components/Input";
import { Profile } from "../../Components/Profile";
import { Button } from "../../Components/Button";

import { Context } from "../../context/Context";
import { useState } from "react";

export function Home() {
  const { data } = useContext(Context);

  const navigation = useNavigation();

  const [list, setList] = useState(data);

  function deleteItem(index) {
    const arr = [...list];
    arr.splice(index, 1);
    setList(arr);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Profile action={() => navigation.navigate("AddNews")} />
        <View>
          <View style={styles.input}>
            <Text style={styles.title}>Busca de notícias</Text>
            <Input title="Busque uma palavra-chave ou trecho" />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Buscar" />
            <View style={styles.listContainer}>
              <FlatList
                contentContainerStyle={styles.list}
                scrollEnabled={true}
                data={list}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => (
                  <>
                    <TouchableOpacity onPress={deleteItem}>
                      <Text>
                        {item.id} - {item.tit}
                      </Text>
                      <Text>{item.not}</Text>
                      <Text>{item.aut}</Text>
                    </TouchableOpacity>
                  </>
                )}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
