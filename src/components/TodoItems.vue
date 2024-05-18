<template>
    <div class="space-y-2">
        <TodoItem v-for="todo in store.state.todos" :key="todo.id" :todo="todo" />
        <!-- <TodoItem v-for="todo in $store.state.todos" :key="todo.id" :todo="todo" /> -->
    </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'
import { useStore } from 'vuex';

export default {
    components: {
        TodoItem
    },
    setup() {
        const store = useStore();

        return {
            store
        }
    }
}
</script>