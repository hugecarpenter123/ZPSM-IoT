import { BottomTabBarProps, BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { TabParamList } from "../MainScreenTabs";
import React from "react";

type Props = BottomTabScreenProps<TabParamList, 'ConnectionScreen'>;

const ConnectionScreen: React.FC<Props> = ({ route, navigation }) => {
    return (<></>);
}

export default ConnectionScreen;