import axios from 'axios'
import { createStore } from 'vuex'

const API_URL = process.env.VUE_APP_API_URL;

export default createStore({
    state: {
        todos: []
    },
    getters: {
    },
    mutations: {
        storeTodos(state, data) {
            state.todos = data
        },
        storeTodo(state, data) {
            const index = state.todos.findIndex(todo => todo.id === data.id);
            if (index !== -1) {
                state.todos.splice(index, 1, data)
            } else {
                state.todos.unshift(data)
            }
        },
        deleteTodo(state, id) {
            const index = state.todos.findIndex(todo => todo.id === id);
            if (index !== -1) {
                state.todos.splice(index, 1)
            }
        }
    },
    actions: {
        async getTodos({ commit }) {
            return await axios.get(`${API_URL}/todos`).then((response) => {
                commit('storeTodos', response.data)
            })
        },
        async addTodo({ commit }, data) {
            return await axios.post(`${API_URL}/todos`, data).then((response) => {
                commit('storeTodo', response.data);
            })
        },
        async updateTodo({ commit }, { id, data }) {
            await axios.put(`${API_URL}/todos/${id}`, data).then((response) => {
                commit('storeTodo', response.data)
            })
        },
        async deleteTodo({ commit }, id) {
            await axios.delete(`${API_URL}/todos/${id}`, id).then(() => {
                commit('deleteTodo', id)
            })
        },
    },
    modules: {
    }
})
