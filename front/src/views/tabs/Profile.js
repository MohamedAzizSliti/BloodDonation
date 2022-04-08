import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getUserData, LogoutUser } from "../../utils/AsyncStorageFunctions";
import Loading from "../../components/Loading";
const Profile = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const [allowedit,setAllowedit]=useState(false);

  useEffect(async () => {
    setUser(await getUserData());
  }, []);

  if (user == null) {
    return (
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        <Loading />
      </View>
    );
  }

  return (
    <View
      style={{
        display: "flex",
        flexGrow: 1,
        backgroundColor: "#dddddd",
        justifyContent: "center",
      }}
    >
      <StatusBar backgroundColor={"#f3607b"} barStyle="auto" />
      <View
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignContent: "center",
            alignItems: "center",
            marginBottom: 10,
            marginTop: 10,
            width: "80%",
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: "700" }}>My Profile</Text>
          <Image
            style={{ height: 90, width: 80 }}
            source={{
              uri: "https://www.seekpng.com/png/full/356-3562377_personal-user.png",
            }}
          />
        </View>
        <View
          style={{
            display: "flex",
            backgroundColor: "white",
            borderRadius: 20,
            width: "80%",
            flex: 1,
            alignSelf: "center",
            padding: 25,
          }}
        >
          <ScrollView contentContainerStyle={{flexGrow: 1,justifyContent:'space-between'}}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: 15,
                borderBottomColor: "#ddd",
                borderBottomWidth: 1,
                alignItems:'center',
                paddingBottom: 10,
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text  style={{ fontWeight: "700" }}>Name</Text>
                <TextInput editable={allowedit} style={{ fontSize: 14,color:allowedit?'black':'gray'}}>
                  {user.username}
                </TextInput>
              </View>
              <View>
              <TouchableOpacity onPress={()=>setAllowedit(!allowedit)}>
                <Image
                  style={{ height: 25, width: 25 }}
                  source={require("../../images/edit.png")}
                />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: 15,
                borderBottomColor: "#ddd",
                borderBottomWidth: 1,
                paddingBottom: 10,
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text style={{ fontWeight: "700" }}>Gender</Text>
                <TextInput editable={allowedit} style={{ fontSize: 14,color:allowedit?'black':'gray' }}>Male</TextInput>
              </View>
              <View>
                 
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: 15,
                borderBottomColor: "#ddd",
                borderBottomWidth: 1,
                paddingBottom: 10,
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text style={{ fontWeight: "700" }}>Email</Text>
                <TextInput editable={allowedit} style={{ fontSize: 14,color:allowedit?'black':'gray'}}>{user.email}</TextInput>
              </View>
              <View>
                 
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: 15,
                borderBottomColor: "#ddd",
                borderBottomWidth: 1,
                paddingBottom: 10,
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text style={{ fontWeight: "700" }}>Phone</Text>
                <TextInput editable={allowedit} style={{ fontSize: 14,color:allowedit?'black':'gray'}}>22222222</TextInput>
              </View>
              <View>
                 
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: 15,
                borderBottomColor: "#ddd",
                alignItems:'center',
                borderBottomWidth: 1,
                paddingBottom: 10,
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text style={{ fontWeight: "700" }}>Change Password</Text>
              </View>
              <View >
                  <TouchableOpacity >
                  <Image
                  style={{ height: 35, width: 35 }}
                  source={require("../../images/padlock.png")}
                />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>

      <TouchableOpacity
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
          marginBottom: 10,
        }}
        onPress={async () => {
          await LogoutUser();
          navigation.reset({
            index: 0,
            routes: [{ name: "signin" }],
          });
        }}
      >
        <Image
          source={require("../../images/logout.png")}
          style={{ height: 50, width: 50 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
