import { BottomTabBarProps, BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { TabParamList } from "../MainScreenTabs";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AddDeviceModal from "../components/AddDeviceModal";

type Props = BottomTabScreenProps<TabParamList, 'DevicesScreen'>;


const DevicesScreen: React.FC<Props> = ({ route, navigation }) => {
    const [showModal, setShowModal] = useState(false);

    const onCloseModal = () => {
        setShowModal(false);
    }

    const renderItems = () => {
        return ["telefon", "pizza", "usb", "coś tam"].map((item, index) => (
            <TouchableOpacity
                style={styles.deviceItem}
                key={index}
                onPress={() => { }}
                activeOpacity={0.7}
            >
                <Text style={styles.deviceItemName}>{item}</Text>
                <Text style={styles.deviceItemPlace}>Fixed place</Text>
            </TouchableOpacity>
        ))
    }

    const AddNewDevice: React.FC = () => {
        return (
            <TouchableOpacity
                style={[styles.deviceItem, styles.deviceItemNew]}
                onPress={() => setShowModal(true)}
            >
                <Text style={[styles.deviceItemName, styles.addNewText]}>+</Text>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView>
                <View style={styles.rowContainer}>
                    {renderItems()}
                    <AddNewDevice />
                </View>
            </ScrollView>
            <AddDeviceModal visible={showModal} onClose={onCloseModal} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    rowContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        width: '100%',
    },
    deviceItem: {
        width: '48%',
        height: 200,
        borderWidth: 1,
        borderColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    deviceItemName: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    deviceItemPlace: {
        fontSize: 16,
    },
    addNewText: {
        fontSize: 40,
    },
    deviceItemNew: {
        borderStyle: 'dashed'
    },
});

export default DevicesScreen;