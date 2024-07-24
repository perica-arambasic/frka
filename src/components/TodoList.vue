<script setup lang="ts">
import {useTodoStore} from "@/stores/todo";

let todoStore = useTodoStore();
</script>

<template>
    <div>
        <div v-for="todo in todoStore.todos" :key="todo.id" class="todo-item">
            <div class="todo-content">
                <p>{{ todo.content }}</p>
                <p class="todo-completed">
                    {{ todo.completed ? 'Completed' : 'Not Completed' }}
                    <i :class="todo.completed ? 'fas fa-check-circle' : 'fas fa-times-circle'"></i>
                </p>
            </div>
            <button class="todo-button" @click="">
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
    width: 100%; /* Full width to accommodate the flex layout */
    padding: 10px; /* Padding inside the card */
    border: 2px solid white; /* White border */
    border-radius: 20px; /* Rounded corners */
    background: var(--vt-c-black); /* Matching background color */
    color: white; /* White text color */
    font-family: "Comic Sans MS", serif; /* Matching font family */
    box-sizing: border-box; /* Ensure padding and border are included in the width */
    margin-bottom: 10px; /* Space between cards */
    font-size: 16px; /* Font size for todo text */
}

.todo-content {
    flex: 1; /* Take up available space */
    margin: 0; /* Remove default margin */
}

.todo-completed {
    margin: 0; /* Remove default margin */
    font-style: italic; /* Italicize completed status */
    opacity: 0.7; /* Slightly dim the completed status */
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
    color: red; /* Set color for the garbage icon */
    font-size: 20px; /* Adjust size for the icon */
}

</style>