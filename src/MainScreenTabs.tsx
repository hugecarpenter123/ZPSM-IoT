import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DevicesScreen from "./screens/DevicesScreen";
import ConnectionScreen from "./screens/ConnectionScreen";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export type TabParamList = {
    DevicesScreen: undefined,
    ConnectionScreen: undefined,
}

const Tab = createBottomTabNavigator<TabParamList>();

const SplashScreenTabs = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="DevicesScreen"
                    component={DevicesScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <MaterialCommunityIcons name="devices" size={24} color={focused ? 'violet' : 'grey'} />
                        ),
                        tabBarLabel: 'Devices',
                        tabBarActiveTintColor: 'violet',
                        // tabBarLabelStyle: {fontSize: 20}
                    }}
                />
                <Tab.Screen name="ConnectionScreen" component={ConnectionScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default SplashScreenTabs;