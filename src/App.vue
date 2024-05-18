<template>
    <div class="px-3 py-10 md:px-10">
        <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
            <TodoSpinner v-if="loading" />
            <template v-else>
                <TodoFormAdd />
                <TodoItems v-if="$store.state.todos.length" />
                <TodoEmpty v-else />
            </template>
        </div>
    </div>
</template>

<script>
import TodoSpinner from '@/components/TodoSpinner.vue';
import TodoFormAdd from '@/components/TodoFormAdd.vue';
import TodoItems from '@/components/TodoItems.vue';
import TodoEmpty from '@/components/TodoEmpty.vue';
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'App',
    components: {
        TodoSpinner,
        TodoFormAdd,
        TodoItems,
        TodoEmpty,
    },
    setup() {
        const loading = ref(false);
        const store = useStore();
        // const todos = store.state.todos;

        store.dispatch('getTodos').finally(() => loading.value = false);

        loading.value = true;
        return {
            loading,
        }
    },
    // data() {
    //     return {
    //         loading: false,
    //     }
    // },
    // created() {
    //     this.loading = true;
    //     this.$store.dispatch('getTodos').finally(() => this.loading = false)
    // }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
