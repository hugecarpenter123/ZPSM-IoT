import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { TriangleColorPicker } from 'react-native-color-picker';

type Props = {
    visible: boolean;
    onClose: () => void;
}
const AddDeviceModal: React.FC<Props> = ({ visible, onClose }) => {
    const [name, setName] = useState('');
    const [place, setPlace] = useState('');
    const [command, setCommand] = useState('');
    const [color, setColor] = useState('#FFFF00');

    const handleSave = () => {
        // przyszła logika do dodania nowego urządzenia (kontext, albo coś innego)
        onClose();
    };

    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Enter Details</Text>

                    {/* TextInputs */}
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        value={name}
                        onChangeText={setName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Place"
                        value={place}
                        onChangeText={setPlace}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Command"
                        value={command}
                        onChangeText={setCommand}
                    />

                    {/* Color Input with Label */}
                    <View style={styles.colorInputContainer}>
                        <Text style={styles.colorInputLabel}>Color</Text>
                        <TextInput
                            style={[styles.input, styles.colorInput]}
                            placeholder="Color"
                            value={color}
                            onChangeText={setColor}
                        />
                    </View>

                    {/* Buttons */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={onClose} style={[styles.button, styles.cancelButton]}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleSave} style={[styles.button, styles.saveButton]}>
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    colorInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    colorInputLabel: {
        marginRight: 10,
    },
    colorInput: {
        flex: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        flex: 1,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cancelButton: {
        backgroundColor: 'red',
        marginRight: 5,
    },
    saveButton: {
        backgroundColor: 'green',
        marginLeft: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    colorPickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    colorPicker: {
        flex: 1,
        height: 40,
        borderRadius: 5,
        marginLeft: 10,
    },
});

export default AddDeviceModal;
