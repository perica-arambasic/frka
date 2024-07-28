import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import type {RouteParamValue} from "vue-router";

export type Todo = {
    id: string
    content: string,
    completed: boolean
}
export const useTodoStore = defineStore('counter', () => {
    const todos = ref<Array<Todo>>([
        {id: "1", content: "Cleanup", completed: false},
        {id: "2", content: "Study", completed: false},
        {id: "3", content: "Shopping", completed: false},
        {id: "4", content: "Training", completed: false}
    ]);
    const completedTodos = computed(() => todos.value.filter((t: Todo) => t.completed))
    const getTodoById = computed(() => {
        return (id: string | RouteParamValue[]) => todos.value.find((todo: Todo) => todo.id === id);
    });
    function addTodo(t: Todo): void {
        todos.value.push(t);
    }
    function removeTodo(id: string) {
        const index = todos.value.findIndex(todo => todo.id === id);
        if (index >= 0) {
            todos.value.splice(index, 1);
        }
    }

    return {todos, completedTodos, getTodoById, addTodo, removeTodo}
})
