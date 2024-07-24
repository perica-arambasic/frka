<script setup lang="ts">
import {ref} from "vue";

let todo = ref('')

function updateCurrentTodo(value: any) {
    todo.value = value;
}
</script>

<template>
    <form class="form-wrapper">
        <input class="todo-input" type="text" @input="updateCurrentTodo($event)">
        <button type="submit" class="todo-button">Add</button>
    </form>

    <div>{{todo}}</div>
</template>

<style scoped>
.form-wrapper {
    display: flex;
}

.todo-input {
    width: 300px;
    height: 40px;
    border: 2px solid white;
    border-radius: 20px;
    padding: 10px;
    font-size: 16px;
    outline: none;
    box-sizing: border-box;
    font-family: "Comic Sans MS",serif;
    background: var(--vt-c-black-mute);
    color: white;
}

.todo-input:focus {
    border-color: #ccc;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
    filter: contrast(200%);
}

.todo-button {
    width: 100px;
    height: 40px;
    border: 2px solid white;
    border-radius: 20px;
    padding: 10px;
    font-size: 16px;
    font-family: "Comic Sans MS", serif;
    background: var(--vt-c-black-mute);
    color: white;
    cursor: pointer;
    outline: none;
    box-sizing: border-box;
    text-align: center;
    display: inline-block;
    transition: background-color 0.3s ease;
}


.todo-button:hover {
    filter: contrast(200%);
}
</style>