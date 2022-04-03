import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LogoutUser } from "../../utils/AsyncStorageFunctions";

const Profile = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress={ async()=> {await LogoutUser();navigation.reset({
            index: 0,
            routes: [{name: 'signin'}],
          })}}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
