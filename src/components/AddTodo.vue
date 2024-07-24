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
    width: 300px; /* Adjust width as needed */
    height: 40px; /* Adjust height as needed */
    border: 2px solid white; /* White border */
    border-radius: 20px; /* Rounded corners */
    padding: 10px; /* Padding inside the input */
    font-size: 16px; /* Font size for text inside the input */
    outline: none; /* Remove default outline on focus */
    box-sizing: border-box; /* Ensure padding and border are included in the width and height */
    font-family: "Comic Sans MS",serif;
    background: var(--vt-c-black);
    color: white;
}

.todo-input:focus {
    border-color: #ccc; /* Change border color on focus, optional */
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5); /* Add a slight shadow on focus, optional */
}

.todo-button {
    width: 100px; /* Adjust width as needed */
    height: 40px; /* Same height as the input */
    border: 2px solid white; /* White border */
    border-radius: 20px; /* Rounded corners to match the input */
    padding: 10px; /* Padding inside the button */
    font-size: 16px; /* Font size for text inside the button */
    font-family: "Comic Sans MS", serif; /* Matching font family */
    background: var(--vt-c-black); /* Matching background color */
    color: white; /* White text color */
    cursor: pointer; /* Pointer cursor on hover */
    outline: none; /* Remove default outline */
    box-sizing: border-box; /* Ensure padding and border are included in the width and height */
    text-align: center; /* Center the text inside the button */
    display: inline-block; /* Ensure it behaves like a button */
    transition: background-color 0.3s ease; /* Smooth transition for background color change */
}

.todo-button:hover {
    background: white; /* Change background color on hover */
    color: var(--vt-c-black); /* Change text color on hover */
}
</style>