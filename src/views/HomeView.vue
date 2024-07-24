<script setup lang="ts">
import AddTodo from "@/components/AddTodo.vue";
import TodoList from "@/components/TodoList.vue";
import {tour} from "@/utilities/driver";


</script>

<template>
    <main class="content-wrapper">
        <button @click="tour()">Explain me my task</button>
        <div class="add-todo">
            <add-todo ></add-todo>
        </div>

        <todo-list class="todo-list"></todo-list>
    </main>
</template>

<style lang="css">
.content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 15px;
}
</style>