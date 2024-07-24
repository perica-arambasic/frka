<script setup lang="ts">
import {type Todo, useTodoStore} from "@/stores/todo";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";

let route = useRoute()
let todoStore = useTodoStore();
let todo = ref<Todo>();

onMounted(() => {
    console.log(route.params.id)
    if (route.params) {
        todo.value = todoStore.getTodoById(route.params.id)
    }
})
</script>

<template>
  <div>
    <h1>{{ $route.params.id }}</h1>

      <div class="single-todo-card">
          <div class="single-todo-content">
              <p>{{ todo?.content  }}</p>
              <p class="single-todo-completed">
                  {{ todo?.completed ? 'Completed' : 'Not Completed' }}
                  <i :class="todo?.completed ? 'fas fa-check-circle' : 'fas fa-times-circle'"></i>
              </p>
          </div>
          <button class="single-todo-button" @click="">
              <i class="fas fa-trash-alt"></i>
          </button>
      </div>
  </div>
</template>

<style>
.single-todo-card {
    width: 480px; /* Larger width */

}

.single-todo-content {

    margin: 0; /* Remove default margin */
}

.single-todo-completed {
    margin: 0; /* Remove default margin */
    font-style: italic; /* Italicize completed status */
    opacity: 0.7; /* Slightly dim the completed status */
    display: flex;
    align-items: center;
}

.single-todo-completed i {
    margin-left: 10px;
    font-size: 24px; /* Larger icon size */
}

.single-todo-button i {
    color: red; /* Set color for the garbage icon */
    font-size: 24px; /* Larger icon size */
}

</style>
