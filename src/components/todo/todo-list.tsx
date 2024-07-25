import { useState } from 'react';
import { Todo } from './types';
import { Button, FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TodoInput } from './todo-input';
import { TodoItem } from './todo-item';

export function TodoList() {
    const [inputIsVisible, setInputIsVisible] = useState(false);
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleTodoInsert = (text: string) => {
        const id = Math.random().toString();

        setTodos((currentTodos) => [...currentTodos, { id, text }]);
        setInputIsVisible(false);
    };

    const handleTodoCancel = () => {
        setInputIsVisible(false);
    };

    const handleTodoDelete = (id: string) => {
        setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
    };

    const handleTodoList = (render: ListRenderItemInfo<Todo>) => {
        return <TodoItem todo={render.item} onDelete={handleTodoDelete} />;
    };

    return (
        <>
            <StatusBar style='light' />
            <View style={styles.todoListContainer}>
                <Button
                    title='Add new Goal'
                    color='#a065ec'
                    onPress={() => setInputIsVisible(true)}
                />
                <TodoInput
                    visible={inputIsVisible}
                    onInsert={handleTodoInsert}
                    onCancel={handleTodoCancel}
                />
                <View style={styles.todoListView}>
                    <FlatList
                        data={todos}
                        renderItem={handleTodoList}
                        keyExtractor={(todo) => todo.id}
                        alwaysBounceVertical={false}
                    ></FlatList>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    todoListContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16
    },
    todoListView: {
        flex: 5
    }
});
