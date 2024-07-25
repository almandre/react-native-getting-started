import { useState } from 'react';
import { Button, Image, Modal, StyleSheet, TextInput, View } from 'react-native';
const goalImage = require('../../../assets/images/goal.png');

interface TodoInputProps {
    visible: boolean,
    onInsert: (text: string) => void,
    onCancel: () => void,
}

export function TodoInput({ visible, onInsert, onCancel }: Readonly<TodoInputProps>) {
    const [text, setText] = useState('');

    const handleTodoChange = (text: string) => {
        setText(text);
    }

    const handleTodoInsert = () => {
        onInsert(text);
        setText('');
    }

    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={goalImage}></Image>
                <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={handleTodoChange} value={text} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={handleTodoInsert} color='#b180f0' />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={onCancel} color='#f31282' />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
});
