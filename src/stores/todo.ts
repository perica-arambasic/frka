import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

type Todo = {
  content: string,
  completed: boolean
}
export const useTodoStore = defineStore('counter', () => {
    const todos = ref<Array<Todo>>([
        {content: "Cleanup", completed: false},
        {content: "Study", completed: false},
        {content: "Shopping", completed: false},
        {content: "Training", completed: false}
    ]);
    const completedTodos = computed(() => todos.value.filter((t: Todo) => t.completed))

    function addTodo(t: Todo):void {
        todos.value.push(t);
    }

    return {todos, completedTodos, addTodo}
})
