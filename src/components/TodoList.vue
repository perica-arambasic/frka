<script setup lang="ts">
import {useTodoStore} from "@/stores/todo";
import router from "@/router";

let todoStore = useTodoStore();

function deleteTodo(id: number) {

}
</script>

<template>
    <div>
        <div v-for="todo in todoStore.todos" :key="todo.content" class="todo-item">
            <div class="todo-content">
                <router-link :to="{name: 'todo', params: {id: todo.id}}">{{ todo.content }}</router-link>
                <p class="todo-completed">
                    {{ todo.completed ? 'Completed' : 'Not Completed' }}
                    <i :class="todo.completed ? 'fas fa-check-circle' : 'fas fa-times-circle'"></i>
                </p>
            </div>
            <button class="todo-button" @click="todoStore.removeTodo(todo.id)">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
    </div>
</template>

<style scoped>
.todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px;
    border: 2px solid white;
    border-radius: 20px;
    background: var(--vt-c-black-mute);
    color: white;
    font-family: "Comic Sans MS", serif;
    box-sizing: border-box;
    margin-bottom: 10px;
    font-size: 16px;
    transition: transform 0.2s ease;
}

.todo-item:hover {
    transform: translateX(15px);
    filter: contrast(200%);
}

.todo-content {
    flex: 1;
    margin: 0;
}

.todo-completed {
    margin: 0;
    font-style: italic;
    opacity: 0.7;
    display: flex;
    align-items: center;
}

.todo-completed i {
    margin-left: 10px;
    font-size: 20px;
}

.todo-button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 18px;
}

.todo-button i {
    color: red;
    font-size: 20px;
}
</style>