import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Todo } from './types';

interface TodoItemProps {
    todo: Todo;
    onDelete: (id: string) => void;
}

export function TodoItem({ todo, onDelete }: Readonly<TodoItemProps>) {
    const { id, text } = todo;

    return (
        <View style={styles.todoItem}>
            <Pressable
                android_ripple={{ color: '#210644' }}
                onPress={() => onDelete(id)}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.todoText}>{text}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    todoItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc'
    },
    pressedItem: {
        opacity: 0.5
    },
    todoText: {
        color: 'white',
        padding: 8
    }
});
