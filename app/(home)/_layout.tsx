import { Tabs } from "expo-router";
import { Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const HomeTabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home/index"
        options={{
          title: "home",
          tabBarIcon: ({ color }) => (
            <Icon as={Ionicons} name="home" size={4} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="history/index"
        options={{
          title: "history",
          tabBarIcon: ({ color }) => (
            <Icon as={Ionicons} name="home" size={4} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="promo/index"
        options={{
          title: "promo",
          tabBarIcon: ({ color }) => (
            <Icon as={Ionicons} name="home" size={4} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: "profile",
          tabBarIcon: ({ color }) => (
            <Icon as={Ionicons} name="person-circle" size={4} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default HomeTabLayout;
