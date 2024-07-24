<script setup lang="ts">
import AddTodo from "@/components/AddTodo.vue";
import TodoList from "@/components/TodoList.vue";
</script>

<template>
    <main class="content-wrapper">
        <add-todo></add-todo>

        <todo-list></todo-list>
    </main>
</template>

<style lang="css">
.content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 15px;
}
</style>