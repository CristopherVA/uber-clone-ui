import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Auth, DataStore } from 'aws-amplify'
import { User } from "../../models";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {

  const { dbUser } = useAuthContext()
  const [name, setName] = useState(dbUser?.name || "");
  const [address, setAddress] = useState(dbUser?.address || "");
  const [lat, setLat] = useState(dbUser?.lat + "" || "0");
  const [lng, setLng] = useState(dbUser?.lng + "" || "0");
  const navigation = useNavigation()
  const { sub, setDbUser } = useAuthContext()
  console.log({ dbUser })

  const onSave = async () => {
    if (dbUser) {
      await updateUser()
    } else {
      await createUser()
    }
  };




  const createUser = async () => {
    try {
      const user = await DataStore.save(
        new User({
          name,
          address,
          lat: parseFloat(lat),
          lng: parseFloat(lng),
          sub
        }))
      setDbUser(user)

    } catch (error) {
      Alert.alert("Error", error.message)
    }
  }

  const updateUser = async () => {
    const user = await DataStore.save(
      User.copyOf(dbUser, (update) => {
        update.name = name;
        update.address = address;
        update.lat = parseFloat(lat);
        update.lng = parseFloat(lng);
      })
    );
    setDbUser(user)
  };

  return (
    <SafeAreaView>
      <Text style={styles.title}>Profile</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        style={styles.input}
      />
      <TextInput
        value={address}
        onChangeText={setAddress}
        placeholder="Address"
        style={styles.input}
      />
      <TextInput
        value={lat}
        onChangeText={setLat}
        placeholder="Latitude"
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        value={lng}
        onChangeText={setLng}
        placeholder="Longitude"
        style={styles.input}
        keyboardType="numeric"

      />
      <Button style={{ marginButton: 10 }} onPress={() => onSave()} title="Save" />
      <Text onPressIn={() => Auth.signOut()} style={{ textAlign: 'center', color: 'red', margin: 10 }} onPress={() => onSave()}  >Sign out</Text>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  input: {
    margin: 10,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
  },

});

export default ProfileScreen;
